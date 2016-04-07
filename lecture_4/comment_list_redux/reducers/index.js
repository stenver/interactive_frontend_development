import { combineReducers } from 'redux'

const comments = (state = [{author: "Surkam", text: "Niss", id: 0}], action) => {
  switch (action.type) {
	case 'ADD_COMMENT':
	  return [...state, action.payload]
	default:
	  return state
  }
};

const commentsApp = combineReducers({
  comments
});

export default commentsApp;
