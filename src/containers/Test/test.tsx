import * as React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import style from './test.less'

interface TestProps {
  readFileAsync: any
}
class Test extends React.Component<TestProps> {
  componentDidMount() {
    // do
  }
  file = () => {
    this.props.readFileAsync()
  }
  render() {
    console.log(this.props);
    return <div>
      <Button type='primary' onClick={this.file}>读取文件</Button>
      <div>
        <div className={style.a}>

        </div>
      </div>
    </div>
  }
}

function mapStateToProps(state: { fileContent: {} }) {
  const { fileContent } = state || { fileContent: {} }
  return {
    fileContent,
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
    readFileAsync: () => dispatch({
      type: 'READ_FILE',
    }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
