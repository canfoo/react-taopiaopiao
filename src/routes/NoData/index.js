export default (store) => ({
  path: 'no',
  getComponent (nextState, cb) {
    const NoDataView = require('./components/NoDataView.js').default
    cb(null, NoDataView)
  }
})
