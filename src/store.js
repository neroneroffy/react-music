import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from './reducer/index'
import rootSaga from './saga/index'
const sagaMiddleware = createSagaMiddleware()
const enhancer = typeof window === 'object' ? window.devToolsExtension() : f=>f
const middlewares = compose(
  applyMiddleware(sagaMiddleware),
  enhancer
)
const clientStore = createStore(rootReducers,middlewares)
sagaMiddleware.run(rootSaga)
export const createClientStore = () => clientStore
// export default store
