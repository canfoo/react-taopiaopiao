import { Toast } from 'antd-mobile';
const RECEIVE_DATA = 'RECEIVE_DATA';
const PUSHLOADSTACK = 'PUSHLOADSTACK';
const POPLOADSTACK = 'POPLOADSTACK';

export const receiveData = (json) => ({
  type: RECEIVE_DATA,
  payload: {
    data: json
  }
})

export const pushLoadStack = () => ({
  type: PUSHLOADSTACK
})

export const popLoadStack = () => ({
  type: POPLOADSTACK
})

export function requestData (url) {
  return (dispatch, getState) => {
    if (!getState().request.loadStack.length) {
      Toast.loading('加载中...', 1000000)
    }
    dispatch(pushLoadStack())
    return fetch(url)
      .then(response => response.json())
      .then(json => { 
        dispatch(receiveData(json))
        dispatch(popLoadStack())
        if (!getState().request.loadStack.length) {
          /*延时是为了更好显示loading，可去掉*/
          window.setTimeout(() => {
            Toast.hide()
          }, 1000)
        }
        return json
      })
  }
}

export const actions = {
  receiveData,
  requestData
}

const ACTION_HANDLERS = {
  [RECEIVE_DATA]: (state, action) => {
    return ({...state, json: action.payload})
  },
  [PUSHLOADSTACK]: (state, action) => {
    state.loadStack.push(1);
    return {...state}
  },
  [POPLOADSTACK]: (state, action) => {
    state.loadStack.pop();
    return {...state}
  }
}

const initialState = {
  json: {},
  loadStack: []
}

export default function requestReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
