import { select, put, call } from 'redux-saga/effects'
import { readFileSuccess, getFile, READ_FILE_SUCCESS } from '../actions/flie'

export function* readFile (){
  const file = yield call(getFile)
  yield put({
    type: READ_FILE_SUCCESS,
    payload: file.data
  })

}