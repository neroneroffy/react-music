import * as React from 'react'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { GET_HOME_DATA, getHomeDataAction } from './store/Home.action'
import pic from '../../static/img/timg.jpg'
import styles from './style.less'
interface HomeProps {
    getHomeDataAction: any,
}
class Home extends React.Component<HomeProps> {
  componentDidMount() {
      const { getHomeDataAction } = this.props
      getHomeDataAction()
    // do
  }

  render() {
      const { results } = this.props.home

      return <div className={styles.home}>
        <Button type={'primary'}>按钮</Button>
          <div>
              {
                  results && results.map(v => <span key={v.gender}>
                      { v.name.title + v.name.first + v.name.last }
                  </span>)
              }
          </div>
        <img src={pic} alt=""/>
    </div>
  }
}

const mapStateToProps = (state: object) => {
    return {
        home: state.home,
    }
}

export default connect(mapStateToProps, {
    getHomeDataAction,
})(Home)
