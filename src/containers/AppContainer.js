import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route } from 'react-router-dom'
import store from '../store/createStore'
import CoreLayout from '../layouts/CoreLayout'

const AppContainer = _ => (
  <Provider store={store}>
    <HashRouter>
        <Route component={CoreLayout} />
    </HashRouter>
  </Provider>
)

export default AppContainer
