import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import speedTyperReducer from './reducers';
import SpeedTyper from "./components/SpeedTyper";

let store = createStore(speedTyperReducer)

ReactDOM.render(
  <Provider store={store}>
	<SpeedTyper />
  </Provider>,
  document.getElementById('content')
);
