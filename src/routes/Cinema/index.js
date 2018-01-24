import { injectReducer } from '../../store/reducers';

export default (store) => ({
	path: 'cinema',
	getComponent (nextState, cb) {
		const CinemaView = require('./containers/CinemaContainer').default;
		const cinemaReducer = require('../../store/cinema').default;
		const cityReducer = require('../../store/city').default;
		const requestReducer =  require('../../store/request').default;
		injectReducer(store, { key: 'cinema', reducer: cinemaReducer});
		injectReducer(store, { key: 'request', reducer: requestReducer});
		injectReducer(store, { key: 'city', reducer: cityReducer});
		cb(null, CinemaView)
	}
})
