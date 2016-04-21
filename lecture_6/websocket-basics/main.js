import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import commentsApp from './reducers'
import CommentApp from './components/CommentApp';
import { websocketConnectionRequested, sendWebsocketMessage } from './actions/Websocket';

let store = createStore(
  commentsApp,
  applyMiddleware(
    thunkMiddleware
  )
)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('content')
);

const unsubscribe = store.subscribe( () => {
  // Send when connected and then immediately unsubscribe to avoid sending the
  // message every time the state changes
  if (store.getState().websocket.connected) {
    sendWebsocketMessage({number: 1})
    unsubscribe()
  }
})

// Immediately connected to websocket, this could also be done only when e.g a button is pushed
store.dispatch(websocketConnectionRequested())
