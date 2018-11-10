import express from 'express'
import { matchRoutes } from "react-router-config"
import routes from '../routes'
import serverRender from './render'
import store from '../store'
const app = express()
app.use(express.static('public'))
app.get("*", (req, res) => {
  const matchedRoutes = matchRoutes(routes, req.path)
  // @Todo 会自动请求robots.txt文件，导致matchedRoutes 为undefined 暂时判断处理，日后补充
  if (matchedRoutes) {
    matchedRoutes[0].route.loadData(store)
    res.send(serverRender(req, routes))
  }
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
