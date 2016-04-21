import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import commentsApp from './reducers'
import CommentApp from "./components/CommentApp";
import myMiddleware from "./middleware/ExampleMiddleware"
import constantActionLogger from "./middleware/ConstantActionLogger"

const myMiddleware1 = myMiddleware("my-middleware-1")
const myMiddleware2 = myMiddleware("my-middleware-2")

let store = createStore(
  commentsApp,
  applyMiddleware(
    thunkMiddleware,
    myMiddleware1,
    myMiddleware2,
    constantActionLogger(window.console)
  )
)

ReactDOM.render(
  <Provider store={store}>
    <CommentApp />
  </Provider>,
  document.getElementById('content')
);

