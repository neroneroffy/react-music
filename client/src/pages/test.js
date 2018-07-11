import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'antd-mobile'

class Test extends React.Component{
  componentDidMount() {
    console.log(this.props)
  }
  file = () => {
    this.props.readFileAsync()
  }
  render() {

    return <div>
      <button onClick={this.file}>读取文件</button>
      <div>
        <Button type="primary">按钮</Button>
      </div>
    </div>
  }
}

function mapStateToProps(state) {
  console.log(state);
  const { fileContent } = state
  return {
    fileContent
  }
}
function mapDispatchToProps(dispatch) {
  return {
    readFileAsync: () => dispatch({
      type: 'READ_FILE'
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)