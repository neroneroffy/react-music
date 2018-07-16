import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './reducers/index'
import rootSaga from './saga/index'

const sagaMiddleware = createSagaMiddleware()
const middlewares = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f=>f
)
const store = createStore(rootReducers,middlewares)
sagaMiddleware.run(rootSaga)
export default store