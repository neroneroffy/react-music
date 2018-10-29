import * as React from 'react'
import { Link } from 'react-router-dom'
import styles from './header.less'

interface HeaderProps {
  menus: any
}
class Header extends React.Component<HeaderProps> {
  componentDidMount() {
    // do
  }

  render() {
    return (<div>
        <p>
            <Link to='/'>首页</Link>
            <Link to='/test'>测sdadas</Link>
        </p>
    </div>)
  }
}

export default Header
