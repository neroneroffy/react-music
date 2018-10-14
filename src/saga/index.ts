import testSaga from '../containers/Test/store/index'

export default function* rootSaga() {
  yield [
    testSaga(),
  ]
}
