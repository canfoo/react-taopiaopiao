import HomeView from './components/HomeView'
import store from '../../store/createStore'
import { injectReducer } from '../../store/reducers'
import { connect } from 'react-redux'
import { switchList } from './modules/home'
import { requestData, receiveData } from '../../store/request'
import { updateVideoSource } from '../../store/video'
import { showCity } from '../../store/city'
import reducer from './modules/home'
import requestReducer from '../../store/request'
import videoReducer from '../../store/video'

//key值和HomeContainer.js的mapStateToProps里面定义的key值保持一致
injectReducer(store, { key: 'home', reducer });
injectReducer(store, {key: 'request', reducer: requestReducer});

const mapDispatchtoProps = {
  	switchList,
  	requestData,
  	receiveData,
  	updateVideoSource,
  	showCity
}

const mapStateToProps = (state) => (
  {
    	home: state.home,
    	request: state.request,
    	city: state.city
  }
)

export default connect(mapStateToProps, mapDispatchtoProps)(HomeView)
