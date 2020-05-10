import {createStore, applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../client/saga";
import reducers from '../client/reducers';

export default middleware => {
    const sagaMiddleware = createSagaMiddleware();
    const store = createStore(
        reducers,
        {},
        applyMiddleware(sagaMiddleware))

    sagaMiddleware.run(rootSaga);
    return store;
}
