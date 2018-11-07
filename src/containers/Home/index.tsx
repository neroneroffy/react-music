import * as React from 'react'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { GET_HOME_DATA } from './store/Home.action'
import pic from '../../static/img/timg.jpg'
import styles from './style.less'
interface HomeProps {
    getHomeData: any
}
class Home extends React.Component<HomeProps> {
  componentDidMount() {
      const { getHomeData } = this.props
      getHomeData()
      console.log(this.props)
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

Home.loadData = store => {
    console.log(store)
}

const mapStateToProps = (state: object) => {
    return {
        home: state.home,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        getHomeData: () => dispatch({
            type: GET_HOME_DATA,
        }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
