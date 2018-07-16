import * as React from 'react'
import * as ReactDOM from 'react-dom'
import App from './app'
import { AppContainer } from 'react-hot-loader'
const root = document.getElementById('root')

if (module.hot){
  module.hot.accept(() => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>
      , root)
  })
}
ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>
  , root)

