import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from '../containers/app'
import store from '../store'

const serverRender = req => {
  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <App/>
      </StaticRouter>
    </Provider>
    ))
  return `<html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0">
                <title>音乐</title>
                <link rel="stylesheet" href="/style.1.css">
                <link rel="stylesheet" href="/style.2.css">
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="/vendors.js"></script>
            <script src="/app.js"></script>
            <script src="/manifest.client.js"></script>
          </html>`
}

export default serverRender
