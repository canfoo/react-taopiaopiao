export const UPDATEAREA = 'UPDATEAREA';
export const GETAREADATA = 'GETAREADATA';

export function updateArea (area) {
	return {
	  type: UPDATEAREA,
	  payload: area
	}
}

export function getAreaData (data) {
	return {
	  type: GETAREADATA,
	  payload: data
	}
}

const ACTION_HANDLERS = {
	[UPDATEAREA]: (state, action) => ({...state, area: action.payload}),
	[GETAREADATA]: (state, action) => ({...state, data: action.payload})
}

const initialState = {
	area: '全部区域',
	data: {}
}

export default function homeReducer (state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]

	return handler ? handler(state, action) : state
}
