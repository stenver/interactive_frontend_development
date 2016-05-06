import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import speedTyperReducer from './reducers';
import Game from "./components/Game";
import websocketPublisher from './middlewares/WebsocketPublisher'
import { sendWebsocketMessage, websocketConnectionRequested } from './actions/Websocket'

const store = createStore(
  speedTyperReducer,
  applyMiddleware(
    thunk,
    websocketPublisher(sendWebsocketMessage)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('content')
);

store.dispatch(websocketConnectionRequested())
