import  * as React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'
import './test.less'

interface TestProps {
  readFileAsync: any
}
interface TestState {

}
class Test extends React.Component<TestProps, TestState>{
  componentDidMount() {
    console.log(this.props)
  }
  file = () => {
    this.props.readFileAsync()
  }
  render() {

    return <div>
      <Button type="primary">读取文件</Button>
      <div>
        <div className="a">

        </div>
      </div>
    </div>
  }
}

function mapStateToProps(state: { fileContent: {} }) {
  console.log(state);
  const { fileContent } = state || { fileContent: {} }
  return {
    fileContent
  }
}
function mapDispatchToProps(dispatch: any) {
  return {
    readFileAsync: () => dispatch({
      type: 'READ_FILE'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)