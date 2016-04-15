import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import commentsApp from './reducers'
import CommentApp from "./components/CommentApp";

let store = createStore(commentsApp, applyMiddleware(thunkMiddleware))

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('content')
);

