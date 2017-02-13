export default (store) => ({
	path: 'movie/detail/:id',
	getComponent (nextState, cb) {
		require.ensure([], (require) => {
			const MovieDetailView = require('./containers/MovieDetailContainer').default
			const requestReducer =  require('../../store/request').default;
			cb(null, MovieDetailView)
		}, 'md')
	}
})