import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import commentsApp from './reducers'
import CommentApp from "./components/CommentApp";

let store = createStore(commentsApp)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('content')
);

