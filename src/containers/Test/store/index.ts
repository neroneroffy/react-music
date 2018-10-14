import { takeLatest } from 'redux-saga/effects'
import { readFile } from './Test.service'
import { READ_FILE } from './Test.action';

export default function* testSaga() {
  yield [
    takeLatest(READ_FILE, readFile),
  ]
}
