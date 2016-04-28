import R from 'ramda'

const initialState = {
  comments: []
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
	case 'RECEIVED_REMOTE_COMMENTS':
    return R.merge(state, {comments: action.payload.comments})
	default:
	  return state
  }
};

export default reducer;
