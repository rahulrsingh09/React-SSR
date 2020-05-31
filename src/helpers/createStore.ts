import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../client/saga";
import reducers from '../client/reducers';
import axios from 'axios';
import { END } from 'redux-saga';

export default (req) => {
    const axiosInstance = axios.create({
        baseURL: 'http://react-ssr-api.herokuapp.com',
        headers: {cookie : req.get('cookie') || ''}
    })

    const sagaMiddleware = createSagaMiddleware();
    const store: any = createStore(
        reducers,
        {},
        applyMiddleware(sagaMiddleware))

    store.runSaga = () => sagaMiddleware.run(rootSaga,axiosInstance);
    store.close = () => store.dispatch(END);
    return store;
}
