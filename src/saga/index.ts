import testSaga from '../containers/Test/store/index'
import homeSaga from '../containers/Home/store/index'

export default function* rootSaga() {
  yield [
    testSaga(),
    homeSaga(),
  ]
}
