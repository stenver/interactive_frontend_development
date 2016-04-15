import R from 'ramda'

const initialState = {
  inProgress: false,
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
	case 'COMMENT_FETCH_REQUESTED':
    return R.merge(state, {inProgress: true})
  case 'COMMENT_FETCHED':
    return R.merge(state, {inProgress: false})
	default:
	  return state
  }
};

export default reducer;
