import { combineReducers } from 'redux'

import commentFilterReducer from './CommentFilterReducer'
import commentFormReducer from './CommentFormReducer'
import websocketReducer from './WebsocketReducer'
import remoteReducer from './RemoteReducer'
import { routerReducer } from 'react-router-redux'

const reducer = combineReducers({
  routing: routerReducer,
  filter: commentFilterReducer,
  form: commentFormReducer,
  websocket: websocketReducer,
  remote: remoteReducer
})

export default reducer;
