import express from 'express'
import { matchRoutes } from "react-router-config"
import routes from '../routes'
import serverRender from './render'
import store from '../store'
const app = express()
console.log(routes);
app.use(express.static('public'))
app.get("*", (req, res) => {
  const matchedRoutes = matchRoutes(routes, req.path)
  matchedRoutes[0].route.loadData(store)
  res.send(serverRender(req, routes))
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
