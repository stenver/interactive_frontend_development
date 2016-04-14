import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import commentsApp from './reducers'
import CommentBox from "./components/CommentBox";

let store = createStore(commentsApp)

ReactDOM.render(
  <Provider store={store}>
    <CommentBox />
  </Provider>,
  document.getElementById('content')
);

