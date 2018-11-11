import express from 'express'
import { createStore, applyMiddleware, compose } from 'redux'
import { matchRoutes } from "react-router-config"
import createSagaMiddleware from 'redux-saga'
import rootReducers from '../reducer/index'
import { fetchHomeData } from '../containers/Home/store/Home.service'
import routes from '../routes'
import serverRender from './render'

// 服务端渲染的store
const sagaMiddleware = createSagaMiddleware()
const middlewares = compose(
  applyMiddleware(sagaMiddleware)
)
const store = createStore(rootReducers, middlewares);

const app = express()
app.use(express.static('public'))
app.get("*", (req, res) => {
  const matchedRoutes = matchRoutes(routes, req.path)
  // @Todo 会自动请求robots.txt文件，导致matchedRoutes 为undefined 暂时判断处理，日后补充
  if (matchedRoutes[0]) {
    sagaMiddleware.run(fetchHomeData).done.then(() => {
      const state = store.getState();
    })
    res.send(serverRender(req, store))
  }
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
