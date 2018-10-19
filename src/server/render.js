import React from 'react'
import { renderToString } from 'react-dom/server'
import { renderRoutes } from 'react-router-config'
import { StaticRouter } from 'react-router-dom'

const serverRender = (req, routes) => {
  const content = renderToString((
      <StaticRouter location={req.path} context={{}}>
        <div>
          {renderRoutes(routes)}
        </div>
      </StaticRouter>
    ))
  return `<html>
            <head>
                <title>音乐</title>
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
          </html>`
}

export default serverRender
