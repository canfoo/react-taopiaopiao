import { connect } from 'react-redux';
import { requestData } from '../../../store/request';
import MovieDetailView from '../components/MovieDetailView';

const mapDispatchtoProps = {
	requestData
}

const mapStateToProps = (state) => ({
  	request: state.request
})

export default connect(mapStateToProps, mapDispatchtoProps)(MovieDetailView)
