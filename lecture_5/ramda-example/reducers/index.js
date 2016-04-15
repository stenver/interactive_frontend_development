import { combineReducers } from 'redux'

import commentFilterReducer from './CommentFilterReducer'
import commentFormReducer from './CommentFormReducer'

const reducer = combineReducers({
  filter: commentFilterReducer,
  form: commentFormReducer
})

export default reducer;
