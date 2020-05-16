import { put, takeEvery, all, call } from 'redux-saga/effects'
import {FETCH_USERS, SAVE_USERS} from "../actions";

export function* fetchUsers(api, action) {
    const res = yield call(getUsers,api);
    yield put({ type: SAVE_USERS, payload: res.data});
}

const getUsers =  (api) => {
    const response = api.get('/users');
    return response;
}


export default function* rootSaga(axiosInstance) {
    yield takeEvery(FETCH_USERS, fetchUsers, axiosInstance)
}