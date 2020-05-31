import { put, takeEvery, call } from 'redux-saga/effects'
import {
    FETCH_ADMINS,
    FETCH_ADMINS_ERROR,
    FETCH_CURRENT_USER,
    FETCH_USERS,
    SAVE_ADMINS,
    SAVE_CURRENT_USER,
    SAVE_USERS
} from "../actions";
import {getAdmins, getCurrentUser, getUsers} from "../handlers";

export function* fetchUsers(api, action) {
    const res = yield call(getUsers,api);
    yield put({ type: SAVE_USERS, payload: res.data});
}

export function* fetchCurrentUser(api, action) {
    const res = yield call(getCurrentUser,api);
    yield put({ type: SAVE_CURRENT_USER, payload: res.data});
}

export function* fetchAdmins(api, action) {
    let res:any = {};
    try{
        res = yield call(getAdmins,api);
        yield put({ type: SAVE_ADMINS, adminsList: res.data});
    } catch(e){
        yield put({ type: FETCH_ADMINS_ERROR, errorObj: e.message});
        console.log('Fetch Admin API Errored');
    }
}

export default function* rootSaga(axiosInstance) {
    yield takeEvery(FETCH_USERS, fetchUsers, axiosInstance)
    yield takeEvery(FETCH_CURRENT_USER, fetchCurrentUser, axiosInstance)
    yield takeEvery(FETCH_ADMINS, fetchAdmins, axiosInstance)
}