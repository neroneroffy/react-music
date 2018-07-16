import { takeLatest } from 'redux-saga/effects'
import { readFile } from './file'
import { READ_FILE } from '../actions/flie';

export default function* rootSaga() {
  yield [
    takeLatest(READ_FILE, readFile),
  ]
}
