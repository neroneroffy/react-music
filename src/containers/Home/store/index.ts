import { takeLatest } from 'redux-saga/effects'
import { fetchHomeData } from './Home.service'
import { GET_HOME_DATA } from './Home.action';

export default function* homeSaga() {
    yield [
        takeLatest(GET_HOME_DATA, fetchHomeData),
    ]
}
