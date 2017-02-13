import { connect } from 'react-redux';
import { updateArea, getAreaData } from '../../../store/cinema';
import { requestData, receiveData } from '../../../store/request';
import CinemaDetailView from '../components/CinemaDetailView';

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

export default connect(mapStateToProps, mapDispatchtoProps)(CinemaDetailView)
