import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import commentsApp from './reducers'
import CommentAppContainer from "./containers/CommentAppContainer";

let store = createStore(commentsApp)

ReactDOM.render(
  <Provider store={store}>
	<CommentAppContainer />
  </Provider>,
  document.getElementById('content')
);

