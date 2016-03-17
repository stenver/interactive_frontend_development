# Webpack-dev-server example

To use:
```
npm install
npm start
```

Open http://localhost:3000 in your browser

## Explanation

In this example we introduce state.

the #getInitialState marks the initial state of a react component. In this case we have an empty array.

When component is mounted, we start loading data from the "server". We start polling the server after every 2 seconds

We mock the "loading of data" from server in the method #loadCommentsFromServer

We pass down the state to our child compontents, where they will become props. Props are immutable and cannot be changed - i.e. we cannot change our child component. If our state changes and we pass new state down, then our child components are rerendered.
