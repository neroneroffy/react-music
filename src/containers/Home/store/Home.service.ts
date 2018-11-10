import axios from 'axios/index';
import { select, put, call } from 'redux-saga/effects'
import { getHomeSuccess, getHomeFailure } from './Home.action'
const getHomeData = () => axios.get('https://randomuser.me/api/')

export function* fetchHomeData() {
    try {
        const data = yield call(getHomeData)
        yield put(getHomeSuccess(data.data))
    } catch {
        yield put(getHomeFailure())
    } finally {
        //
    }
}
