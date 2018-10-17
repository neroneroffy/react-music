import React from 'react'
import './app.less'
import store from '../store'
import { Provider } from 'react-redux'
import Test from '../containers/Test/test'
import { renderRoutes } from 'react-router-config'
import Header from '../components/Header/index'

class App extends React.Component {
  render() {
    return <Provider store={store}>
      <div className='app'>
          <Header menus={{}}/>
          { renderRoutes(this.props.route.routes) }
      </div>
    </Provider>
  }
}

export default App