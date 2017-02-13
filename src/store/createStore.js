import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { hashHistory, browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import { updateLocation } from './location'

export default (initialState = {}) => {
  const middleware = [thunk]
  const enhancers = []
  if (__DEV__) {
    const devToolsExtension = window.devToolsExtension
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension())
    }
  }

  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = hashHistory.listen(updateLocation(store))
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}
