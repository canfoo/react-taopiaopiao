import { injectReducer } from '../../store/reducers';

export default (store) => ({
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const HomeView = require('./containers/HomeContainer').default;
      const reducer = require('./modules/home').default;
      const requestReducer =  require('../../store/request').default;
      const videoReducer = require('../../store/video').default;
      const cityReducer = require('../../store/city').default;
      //key值和HomeContainer.js的mapStateToProps里面定义的
      //全局变量名保持一致
      injectReducer(store, { key: 'home', reducer });
      injectReducer(store, { key: 'request', reducer: requestReducer});
      injectReducer(store, { key: 'video', reducer: videoReducer});
      injectReducer(store, { key: 'city', reducer: cityReducer});
      cb(null, HomeView);
    }, 'home')
  }
})

