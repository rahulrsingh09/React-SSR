
import express from 'express';
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";
import {matchRoutes} from 'react-router-config';
import Routes from "./client/Routes";

const app = express();

app.use(express.static('public'));
app.get('*', (req, res) => {
    const store = createStore();
    const branch = matchRoutes(Routes, req.path);
    const promises =  branch.map(({ route }) => {
        return route.loadData ? route.loadData(store) : Promise.resolve(null);
    });
    //console.log(promises);
    //setTimeout((function() {res.send(renderer(req, store))}), 2000);
    Promise.all(promises).then(data => {
        res.send(renderer(req, store))
    })

});

app.listen(3000, () => {
    console.log('Listening on Port 3000');
})