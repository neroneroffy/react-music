import * as React from 'react'
import { Button } from 'antd-mobile'
import pic from '../../static/img/timg.jpg'
import styles from './style.less'
interface HomeProps {
  name: any
}
class Home extends React.Component<HomeProps> {
  componentDidMount() {
    // do
  }

  render() {
    return <div className={styles.home}>
        <Button type={'primary'}>按钮</Button>
      this is home
        <span className='icon-office'></span>
        <img src={pic} alt=""/>
    </div>
  }
}

export default Home
