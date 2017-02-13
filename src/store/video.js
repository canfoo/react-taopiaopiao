export const UPDATEVIDEOSOURCE = 'UPDATEVIDEOSOURCE'

export function updateVideoSource (src, poster) {
  return {
    type    : UPDATEVIDEOSOURCE,
    payload : {src, poster}
  }
}

const initialState = {
	src: '',
	poster: ''
}

export default function videoReducer (state = initialState, action) {
  return action.type === UPDATEVIDEOSOURCE
    ? action.payload
    : state
}
