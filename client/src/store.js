import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './reducers'
import rootSaga from './saga'

const sagaMiddleware = createSagaMiddleware()
const middlewares = compose(
  applyMiddleware(sagaMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f=>f
)
const store = createStore(rootReducers,middlewares)
sagaMiddleware.run(rootSaga)
export default store