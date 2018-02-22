import React from 'react'
import ReactDOM from 'react-dom'
import store from './store/createStore'
import App from './containers/AppContainer'
import { AppContainer } from 'react-hot-loader'
// import MeC from './routes/Me'
// import CoreLayout from './layouts/CoreLayout'

import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'

const initialState = window.___INITIAL_STATE__

const MOUNT_NODE = document.getElementById('root')

// let render = () => {
//   const routes = require('./routes/index')
//
//   ReactDOM.render(
//     <AppContainer store={store} routes={routes} />,
//     MOUNT_NODE
//   )
// }
const routes = require('./routes/index')
let render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <HashRouter>
            <Route component={Component} />
        </HashRouter>
      </Provider>
    </AppContainer>,
    MOUNT_NODE,
  )
}


if (__DEV__) {
  if (window.devToolsExtension) {
    window.devToolsExtension.open()
  }
}

if (__DEV__) {
  if (module.hot) {

    // const renderApp = render
    // const renderError = (error) => {
    //   const RedBox = require('redbox-react').default
    //   ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    // }
    // render = () => {
    //   try {
    //     renderApp()
    //   } catch (error) {
    //     console.error(error)
    //     renderError(error)
    //   }
    // }
    module.hot.accept('./routes/Me/index.js', () =>
      setImmediate(() => {
        console.log('11111---11222222');
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render(App)
      })
    )
  }
}

render(App)
