import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../client/saga";
import reducers from '../client/reducers';

import { END } from 'redux-saga';

export default middleware => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducers,
        {},
        applyMiddleware(sagaMiddleware))

    store.runSaga = () => sagaMiddleware.run(rootSaga);
    store.close = () => store.dispatch(END);
    return store;
}
