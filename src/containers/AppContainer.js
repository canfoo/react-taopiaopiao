import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { HashRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import CoreLayout from '../layouts/CoreLayout';

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <HashRouter>
            <Route component={CoreLayout} />
        </HashRouter>
      </Provider>
    )
  }
}

export default AppContainer
