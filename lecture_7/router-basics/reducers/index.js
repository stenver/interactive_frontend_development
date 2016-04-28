import { combineReducers } from 'redux'

import commentFilterReducer from './CommentFilterReducer'
import commentFormReducer from './CommentFormReducer'
import websocketReducer from './WebsocketReducer'
import remoteReducer from './RemoteReducer'

const reducer = combineReducers({
  filter: commentFilterReducer,
  form: commentFormReducer,
  websocket: websocketReducer,
  remote: remoteReducer
})

export default reducer;
