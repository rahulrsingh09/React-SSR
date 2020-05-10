import { put, takeEvery, all, call } from 'redux-saga/effects'
import {FETCH_USERS, SAVE_USERS} from "../actions";
import axios from 'axios';

export function* fetchUsers(action) {
    const res = yield call(getUsers);
    yield put({ type: SAVE_USERS, payload: res.data});
}


const getUsers =  () => {
    const response = axios.get('http://react-ssr-api.herokuapp.com/users');
    return response;
}

export function* actionWatcher() {
    yield takeEvery(FETCH_USERS, fetchUsers)
}

export default function* rootSaga() {
    yield all([
        actionWatcher()
    ])
}