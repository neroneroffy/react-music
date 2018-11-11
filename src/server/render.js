import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../containers/app'
import fs from 'fs'

const serverRender = (req, store) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <App/>
      </StaticRouter>
    </Provider>
    ))
  const template = fs.readFileSync(process.cwd() + '/public/static/index.html', 'utf8')
  return template.replace('<!--app-->', content)
}

export default serverRender
