export const SWITCHLIST = 'SWITCHLIST'
export const SWITCHHOTLIST = 'SWITCHHOTLIST'
export const SWITCHCOMINGLIST = 'SWITCHCOMINGLIST'

export function switchList (kind) {
	if (kind === 'hot') {
		return {
		  type: SWITCHHOTLIST
		}
	} {
		return {
		  type: SWITCHCOMINGLIST
		}
	}
}

const ACTION_HANDLERS = {
	[SWITCHHOTLIST]: (state) => ({...state, hotListShow: true}),
	[SWITCHCOMINGLIST]: (state) => ({...state, hotListShow: false})
}

const initialState = {
	hotListShow: true
}

export default function homeReducer (state = initialState, action) {
	const handler = ACTION_HANDLERS[action.type]

	return handler ? handler(state, action) : state
}
