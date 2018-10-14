import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './reducer/index'
import rootSaga from './containers/Test/store/index'

const sagaMiddleware = createSagaMiddleware()
const middlewares = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f=>f
)
const store = createStore(rootReducers,middlewares)
sagaMiddleware.run(rootSaga)
export default store