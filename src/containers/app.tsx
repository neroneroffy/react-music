import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../components/Header/index'
import styles from './app.less'
import Routes from '../routes.tsx'
class App extends React.Component {
    render() {
        return <div className={styles.app}>
            <Header menus={{}}/>
            <Routes/>
        </div>
    }
}

export default App
