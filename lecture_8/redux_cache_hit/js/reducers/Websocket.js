import R from 'ramda'

const initialState = {
  connected: false
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
	case 'WEBSOCKET_CONNECTION_ESTABLISHED':
    return R.merge(state, {connected: true})
  case 'WEBSOCKET_CONNECTION_DROPPED':
    return R.merge(state, {connected: false})
	default:
	  return state
  }
};

export default reducer;
