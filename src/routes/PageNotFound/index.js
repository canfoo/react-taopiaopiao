export default () => ({
  path: '404',
  getComponent (nextState, cb) {
    const PageNotFound = require('./components/PageNotFound').default
    cb(null, PageNotFound)
  }
})
