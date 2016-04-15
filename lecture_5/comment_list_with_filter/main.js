import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import commentsApp from './reducers'
import CommentBoxContainer from "./containers/CommentBoxContainer";

let store = createStore(commentsApp)

ReactDOM.render(
  <Provider store={store}>
	<CommentBoxContainer />
  </Provider>,
  document.getElementById('content')
);

