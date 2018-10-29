import * as React from 'react'
import * as ReactDOM from 'react-dom'
const root = document.getElementById('root')
import {AppContainer} from 'react-hot-loader'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import store from '../store';
import App from '../containers/app'

if (module.hot) {
    module.hot.accept('../containers/app.tsx', () => {
        const NextApp = require('../containers/app.tsx').default
        ReactDOM.render(
            <AppContainer>
                <Provider store={store}>
                    <BrowserRouter>
                        <NextApp/>
                    </BrowserRouter>
                </Provider>
            </AppContainer>, root)
    })
}

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </AppContainer>
    , root)
