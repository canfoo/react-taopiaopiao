export default (store) => ({
  path: 'me',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const MeView = require('./components/MeView.js').default
      cb(null, MeView)
    }, 'me')
  }
})
