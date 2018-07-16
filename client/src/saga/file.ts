import { select, put, call } from 'redux-saga/effects'
import { getFile } from '../service/file'
import { READ_FILE_SUCCESS, readFileSuccess } from '../actions/flie'

export function* readFile() {
  try {
    const file = yield call(getFile)
    yield put(readFileSuccess(file.data))
  } finally {
    const file = yield call(getFile)
    yield put(readFileSuccess(file.data))
  }
}
