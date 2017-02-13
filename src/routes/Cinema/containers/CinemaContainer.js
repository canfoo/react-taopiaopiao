import { connect } from 'react-redux';
import { updateArea, getAreaData } from '../../../store/cinema';
import { requestData, receiveData } from '../../../store/request';
import { showCity } from '../../../store/city';
import CinemaView from '../components/CinemaView';

const mapDispatchtoProps = {
	updateArea,
	getAreaData,
  	requestData,
  	receiveData,
  	showCity
}

const mapStateToProps = (state) => ({
	cinema: state.cinema,
  	request: state.request,
  	city: state.city
})

export default connect(mapStateToProps, mapDispatchtoProps)(CinemaView)
