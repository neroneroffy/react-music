import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../components/Header/index'
import styles from './app.less'

class App extends React.Component {
  render() {
      return <div className={styles.app}>
              <Header menus={{}}/>
          {renderRoutes(this.props.route.routes)}
          </div>
  }
}

export default App
