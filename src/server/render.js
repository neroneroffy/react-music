import React from 'react'
import { renderToString } from 'react-dom/server'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from '../store'

const serverRender = (req, routes) => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    </Provider>
    ))
  return `<html>
            <head>
                <meta charset="UTF-8">
                <title>音乐</title>
                <link rel="stylesheet" href="/main.css">
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="/client.js"></script>
          </html>`
}

export default serverRender
