const UPDATECITY = 'UPDATECITY';
const SHOWCITY = 'SHOWCITY';
const CLOSECITY = 'CLOSECITY';

export function updateCity (city) {
	return {
		type: UPDATECITY,
		payload: {
			name: city
		}
	}
}

export function showCity () {
	return {
		type: SHOWCITY
	}
}

export function closeCity () {
	return {
		type: CLOSECITY
	}
}

const ACTION_HANDLERS = {
  [UPDATECITY]: (state, action) => ({...action.payload, show: false}),
  [SHOWCITY]: (state) => ({...state, show: true}),
  [CLOSECITY]: (state) => ({...state, show: false})
}

const initialState = {
	name: '北京',
	show: false
}

export default function cityReducer (state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]

	return handler ? handler(state, action) : state
}
