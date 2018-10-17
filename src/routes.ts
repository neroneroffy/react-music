import React from 'react'
import Home from './containers/Home/index'
import Test from './containers/Test/test'
import App from './containers/app'
export default [
  {
    path: '/',
    component: App,
    routes: [
      {
        path: '/',
        component: Home,
        exact: true,
      },
      {
        path: '/test',
        component: Test,
        exact: true,
      },
    ],
  },
]
