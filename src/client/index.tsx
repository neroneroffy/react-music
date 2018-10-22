import * as React from 'react'
import * as ReactDOM from 'react-dom'
// import { AppContainer } from 'react-hot-loader'
const root = document.getElementById('root')
// import store from '../store'
import routes from '../routes'
import { Provider } from 'react-redux'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter } from 'react-router-dom'
import store from '../store';

// if (module.hot){
//   module.hot.accept(() => {
//     ReactDOM.render(
//       <AppContainer>
//         <App />
//       </AppContainer>
//       , root)
//   })
// }
const RootApp = () => <Provider store={store}>
    <BrowserRouter>
        { renderRoutes(routes) }
    </BrowserRouter>
</Provider>
ReactDOM.hydrate(
    <RootApp/>
  , root)
