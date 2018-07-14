import React from 'react'
import './app.less'
import store from './store'
import { Provider } from 'react-redux'
import Test from './pages/test.tsx'
class App extends React.Component{
  render () {
    return <Provider store={store}>
      <div className="app">
        <Test/>
      </div>
    </Provider>
  }
}

export default App