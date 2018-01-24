import { combineReducers } from 'redux';
import locationReducer from './location';
import videoReducer from './video';
import cityReducer from './city';

export const makeRootReducer = (asyncReducers) => {
	return combineReducers({
		// location: locationReducer,
		// video: videoReducer, //同步的redux流
		city: cityReducer,
		...asyncReducers
	})
}

export const injectReducer = (store, { key, reducer }) => {
	store.asyncReducers[key] = reducer;
	store.replaceReducer(makeRootReducer(store.asyncReducers));  // 替换 store 当前用来计算 state 的 reducer
}


export default makeRootReducer;
