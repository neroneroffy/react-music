import * as React from 'react'
import Home from './containers/Home/index'
import Test from './containers/Test/test'
import App from './containers/app'
import { Route, Redirect } from 'react-router-dom'

interface RoutesProps {
    routes: any
}
class Routes extends React.Component<RoutesProps> {
    state = {
        routesList: [
            {
                path: '/',
                component: () => <Redirect to='/home'/>,
                name: 'App',
            },
            {
                path: '/home',
                component: Home,
                name: 'Home',
            },
            {
                path: '/test',
                component: Test,
                name: 'Test',
            },
        ],
    }
    render() {
        return <div>
            {
                this.state.routesList.map((v: any) => {
                    return  <Route path={v.path} key={v.name} component={v.component}/>
                }
            )
    }
        </div>
    }
}

export default Routes
