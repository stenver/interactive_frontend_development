import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import speedTyperReducer from './reducers';
import Game from "./components/Game";

const store = createStore(
  speedTyperReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
	<Game />
  </Provider>,
  document.getElementById('content')
);
