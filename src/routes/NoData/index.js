export default (store) => ({
  path: 'no',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const NoDataView = require('./components/NoDataView.js').default
      cb(null, NoDataView)
    }, 'nodata')
  }
})
