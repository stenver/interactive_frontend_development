import { combineReducers } from 'redux'

import commentFilterReducer from './CommentFilterReducer'
import commentFormReducer from './CommentFormReducer'
import fetchReducer from './FetchReducer'

const reducer = combineReducers({
  filter: commentFilterReducer,
  form: commentFormReducer,
  fetching: fetchReducer
})

export default reducer;
