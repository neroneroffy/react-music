import React from 'react'
import { connect } from 'react-redux'

class Test extends React.Component{
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return <div>
      <button onClick={() => {this.props.readFileAsync()}}>读取文件</button>
      <div>{this.props.fileContent.name}</div>
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