import * as React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'

interface HomeProps {
  name: any
}
class Home extends React.Component<HomeProps> {
  componentDidMount() {
    // do
  }

  render() {
    return <div>
      this is home
    </div>
  }
}

export default Home
