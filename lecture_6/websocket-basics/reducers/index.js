import { combineReducers } from 'redux'

import commentFilterReducer from './CommentFilterReducer'
import commentFormReducer from './CommentFormReducer'
import fetchReducer from './FetchReducer'
import websocketReducer from './WebsocketReducer'

const reducer = combineReducers({
  filter: commentFilterReducer,
  form: commentFormReducer,
  fetching: fetchReducer,
  websocket: websocketReducer
})

export default reducer;
