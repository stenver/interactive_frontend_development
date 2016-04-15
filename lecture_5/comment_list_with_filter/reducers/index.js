import { combineReducers } from 'redux'

const scoobyComment = {
  author: "Scooby",
  text: "Doo",
  id: -1
};
const emmaComment = {
  author: "Emma",
  text: "No!",
  id: 0
}

const initialComments = [scoobyComment, emmaComment];
const initialAuthor = '';
const initialText = '';

const initialState = {
  comments: initialComments,
  author: initialAuthor,
  text: initialText,
  filteredByAuthor: ''
}

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2)

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
	case 'ADD_COMMENT':
    if (action.payload.author && action.payload.text) {
      const newComments = state.comments.concat(action.payload);
      return merge(state, {comments: newComments, author: '', text: ''});
    } else {
      return state;
    }
  case 'SET_AUTHOR':
    return merge(state, {author: action.payload})
  case 'SET_TEXT':
    return merge(state, {text: action.payload})
  case 'SET_AUTHOR_FILTER':
    return merge(state, { filteredByAuthor: action.payload })
	default:
	  return state
  }
};

export default commentReducer;
