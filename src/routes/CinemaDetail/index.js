import store from '../../store/createStore'
import { injectReducer } from '../../store/reducers'
import { connect } from 'react-redux'
import cinemaReducer, { updateArea, getAreaData } from '../../store/cinema'
import requestReducer, { requestData, receiveData } from '../../store/request'
import CinemaDetailView from './components/CinemaDetailView'

const mapDispatchtoProps = {
	updateArea,
	getAreaData,
	requestData,
	receiveData
}

const mapStateToProps = (state) => ({
	cinema: state.cinema,
  request: state.request
})

injectReducer(store, { key: 'cinema', reducer: cinemaReducer})
injectReducer(store, {key: 'request', reducer: requestReducer})

export default connect(mapStateToProps, mapDispatchtoProps)(CinemaDetailView)
// export default (store) => ({
// 	path: 'cinema/detail/:id',
// 	getComponent (nextState, cb) {
// 		const CinemaDetailView = require('./containers/CinemaDetailContainer').default;
// 		const cinemaReducer = require('../../store/cinema').default;
// 		injectReducer(store, { key: 'cinema', reducer: cinemaReducer});
// 		cb(null, CinemaDetailView)
// 	}
// })
