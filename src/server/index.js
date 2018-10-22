import express from 'express'
import routes from '../routes'
import serverRender from './render'
const app = express()

app.use(express.static('public'))
app.get("*", (req, res) => {
  res.send(serverRender(req, routes))
})

app.listen(3000, () => {
  console.log('server listening on port 3000')
})
