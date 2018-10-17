import * as React from 'react'
import { Link } from 'react-router-dom'

interface HeaderProps {
  menus: any
}
class Header extends React.Component<HeaderProps> {
  componentDidMount() {
    // do
  }
  file = () => {
    this.props.readFileAsync()
  }
  render() {
    return <div>
        <Link to='/'>首页</Link>
        <Link to='/test'>test</Link>
    </div>
  }
}

export default Header
