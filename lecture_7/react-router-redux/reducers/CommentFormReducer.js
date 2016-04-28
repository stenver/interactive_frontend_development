import R from 'ramda'

const initialState = {
  comments: [],
  author: '',
  text: '',
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
	case 'ADD_COMMENT':
    if (action.payload.author && action.payload.text) {
      const newComments = state.comments.concat(action.payload);
      return R.merge(state, {comments: newComments, author: '', text: ''});
    } else {
      return state;
    }
  case 'SET_AUTHOR':
    return R.merge(state, {author: action.payload})
  case 'SET_TEXT':
    return R.merge(state, {text: action.payload})
	default:
	  return state
  }
};

export default reducer;
