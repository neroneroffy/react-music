import * as React from 'react'
import Home from './containers/Home/index'
import Test from './containers/Test/test'
import Loadable from 'react-loadable';
import { Route } from 'react-router-dom'
const HomeAsync = Loadable({
    loader: () => import('./containers/Home/index'),
    loading: () => <div>加载中</div>,
})
const TestAsync = Loadable({
    loader: () => import('./containers/Test/test'),
    loading: () => <div>加载中</div>,
})
interface RoutesProps {
    routes: any
}
class Routes extends React.Component<RoutesProps> {
    state = {
        routesList: [
            {
                path: '/home',
                component: HomeAsync,
                name: 'Home',
            },
            {
                path: '/test',
                component: TestAsync,
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
