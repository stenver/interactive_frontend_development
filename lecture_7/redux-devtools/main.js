import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import commentsApp from './reducers'
import CommentApp from './components/CommentApp';
import { websocketConnectionRequested, sendWebsocketMessage } from './actions/Websocket';
import R from 'ramda'

const finalCreateStore = R.compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

let store = finalCreateStore(commentsApp)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('content')
);

let previousComments;
const unsubscribe = store.subscribe( () => {
  const newComments = store.getState().form.comments

  if (previousComments !== newComments) {
    sendWebsocketMessage(store.getState().form.comments)
  }

  previousComments = newComments
})

// Immediately connected to websocket, this could also be done only when e.g a button is pushed
store.dispatch(websocketConnectionRequested())
