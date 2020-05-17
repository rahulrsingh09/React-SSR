
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import {Provider} from 'react-redux';
import Routes from "./Routes";
import rootSaga from "./saga";
import reducers from '../client/reducers';
import {matchRoutes, renderRoutes} from "react-router-config";
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: '/api'
})

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducers,
    window['INITIAL_STATE'],
    applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga, axiosInstance);


ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
            <React.Fragment>
                {renderRoutes(Routes)}
            </React.Fragment>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
