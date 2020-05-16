import { put, takeEvery, call } from 'redux-saga/effects'
import {FETCH_CURRENT_USER, FETCH_USERS, SAVE_CURRENT_USER, SAVE_USERS} from "../actions";
import {getCurrentUser, getUsers} from "../handlers";

export function* fetchUsers(api, action) {
    const res = yield call(getUsers,api);
    yield put({ type: SAVE_USERS, payload: res.data});
}

export function* fetchCurrentUser(api, action) {
    const res = yield call(getCurrentUser,api);
    yield put({ type: SAVE_CURRENT_USER, payload: res.data});
}

export default function* rootSaga(axiosInstance) {
    yield takeEvery(FETCH_USERS, fetchUsers, axiosInstance)
    yield takeEvery(FETCH_CURRENT_USER, fetchCurrentUser, axiosInstance)
}