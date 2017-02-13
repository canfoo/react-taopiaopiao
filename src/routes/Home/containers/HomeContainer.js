import { connect } from 'react-redux';
import { switchList } from '../modules/home';
import { requestData, receiveData } from '../../../store/request';
import { updateVideoSource } from '../../../store/video';
import { showCity } from '../../../store/city'
import HomeView from '../components/HomeView';

const mapDispatchtoProps = {
  	switchList,
  	requestData,
  	receiveData,
  	updateVideoSource,
  	showCity
}

const mapStateToProps = (state) => ({
  	home: state.home,
  	request: state.request,
  	city: state.city
})

export default connect(mapStateToProps, mapDispatchtoProps)(HomeView)
