import { combineReducers } from 'redux'

const initialComments = [{author: "Surkam", text: "Niss", id: 0}];
const initialAuthor = '';
const initialText = '';

const initialState = {
  comments: initialComments,
  author: initialAuthor,
  text: initialText
}

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2)

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
	case 'ADD_COMMENT':
    if (state.author && state.text) {
      const newComments = state.comments.concat(action.payload);
      return merge(state, {comments: newComments, author: '', text: ''});
    } else {
      return state;
    }
  case 'SET_AUTHOR':
    return merge(state, {author: action.payload})
  case 'SET_TEXT':
    return merge(state, {text: action.payload})
	default:
	  return state
  }
};

export default commentReducer;
