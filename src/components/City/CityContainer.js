import { connect } from 'react-redux';
import City from './City';
import { requestData } from '../../store/request';
import { updateCity, closeCity } from '../../store/city'

const mapDispatchtoProps = {
  	requestData,
  	updateCity,
  	closeCity
}

const mapStateToProps = (state) => ({
  	home: state.home,
  	request: state.request,
  	city: state.city
})

export default connect(mapStateToProps, mapDispatchtoProps)(City)
