import { select, put, call } from 'redux-saga/effects'
import { getFile } from '../../../service/file'
import { readFileFailure, readFileSuccess, readFileComplete } from './Test.action'

export function* readFile() {
  try {
    const file = yield call(getFile)
    yield put(readFileSuccess(file.data))
  } catch {
    yield put(readFileFailure())
  } finally {
    yield put(readFileComplete())
  }
}
