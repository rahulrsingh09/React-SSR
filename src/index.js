
import express from 'express';
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import {matchRoutes} from 'react-router-config';
import Routes from "./client/Routes";
import {ignoreFavicon} from "./helpers/ignoreFavicon";

const app = express();

app.use(ignoreFavicon);

//app.disable('etag'); //to prevent 304

app.use(express.static('public'));
app.get('*', (req, res) => {
    console.log(1);
    const store = createStore();
    const branch = matchRoutes(Routes, req.path);

    store.runSaga().toPromise().then(() => {
        res.send(renderer(req, store))
    });

    const promises =  branch.map(({ route }) => {
        return route.loadData ? route.loadData(store) : Promise.resolve(null);
    });

    store.close();
});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})