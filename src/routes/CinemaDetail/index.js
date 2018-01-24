import { injectReducer } from '../../store/reducers';

export default (store) => ({
	path: 'cinema/detail/:id',
	getComponent (nextState, cb) {
		const CinemaDetailView = require('./containers/CinemaDetailContainer').default;
		const cinemaReducer = require('../../store/cinema').default;
		injectReducer(store, { key: 'cinema', reducer: cinemaReducer});
		cb(null, CinemaDetailView)
	}
})
