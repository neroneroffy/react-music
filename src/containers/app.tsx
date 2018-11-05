import React from 'react'
import { renderRoutes } from 'react-router-config'
import Header from '../components/Header/index'
import styles from './app.less'
import Routes from '../routes.tsx'
import { Button } from 'antd-mobile';
import '../common/icon-font.css'
class App extends React.Component {
    render() {
        return <div className={styles.app}>
            <Header menus={{}}/>
            <span className='icon-office'></span>
            <Routes/>
        </div>
    }
}

export default App
