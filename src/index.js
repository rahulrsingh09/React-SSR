
import express from 'express';
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import {matchRoutes} from 'react-router-config';
import Routes from "./client/Routes";
import {ignoreFavicon} from "./helpers/ignoreFavicon";
import proxy from 'express-http-proxy';

const app = express();

// the option is just for this api we are using , in project its not required
app.use('/api',
    proxy('http://react-ssr-api.herokuapp.com'));

app.use(ignoreFavicon);

//app.disable('etag'); //to prevent 304

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore(req);
    const branch = matchRoutes(Routes, req.path);
    store.runSaga().toPromise().then(() => {
        const context = {};
        const content = renderer(req, store,context);
        if(context.url){
            return res.redirect(301,context.url);
        }
        if(context.notFound){
            res.status(404);
        }
        res.send(content);
    });

    const promises =  branch.map(({ route }) => {
        return route.loadData ? route.loadData(store) : Promise.resolve(null);
    });

    store.close();
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('Listening on Port 3000');
})