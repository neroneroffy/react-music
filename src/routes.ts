import * as React from 'react'
import Home from './containers/Home/index'
import Test from './containers/Test/test'

import { Redirect } from 'react-router-dom'

export default [
    {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
    },
    {
        path: '/test',
        component: Test,
        exact: true,
    },
]
