import { combineReducers } from 'redux'

import commentFilterReducer from './CommentFilterReducer'
import commentFormReducer from './CommentFormReducer'
import websocketReducer from './WebsocketReducer'
import remoteReducer from './RemoteReducer'
import { routerReducer } from 'react-router-redux'
import globalReducer from './GlobalKey'

const reducer = combineReducers({
  routing: routerReducer,
  filter: commentFilterReducer,
  form: commentFormReducer,
  websocket: websocketReducer,
  remote: remoteReducer,
  global: globalReducer
})

export default reducer;
