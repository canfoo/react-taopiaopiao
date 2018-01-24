import { combineReducers } from 'redux';
import videoReducer from './video';
import cityReducer from './city';

export const makeRootReducer = (asyncReducers) => {
	return combineReducers({
		video: videoReducer,  // 全局存在的state
		city: cityReducer,  // 全局存在的state
		...asyncReducers
	})
}

export const injectReducer = (store, { key, reducer }) => {
	store.asyncReducers[key] = reducer;
	store.replaceReducer(makeRootReducer(store.asyncReducers));  // 替换 store 当前用来计算 state 的 reducer
}


export default makeRootReducer;
