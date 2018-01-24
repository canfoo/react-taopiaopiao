export default (store) => ({
	path: 'movie/detail/:id',
	getComponent (nextState, cb) {
		const MovieDetailView = require('./containers/MovieDetailContainer').default
		const requestReducer =  require('../../store/request').default;
		cb(null, MovieDetailView)
	}
})
