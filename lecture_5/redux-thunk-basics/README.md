# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

In this example we introduce the [redux-thunk](https://github.com/gaearon/redux-thunk) middleware
which allows writing asynchronous action creators.

More precisely, it allows writing actions that return functions that will be passed the dispatch function.
```js
let timer;
export const fetchPost = () => {
  return dispatch => {
    timer = setTimeout(
      () => dispatch(addComment('Server', 'Said so')),
      1000
    )
  }
}
```

This opens up possibility of writing arbitrary asynchronous and side-effecting actions.

Care needs to be taken to gracefully handle failure and cancelation!
Asynchronous actions are still more complex than synchronous.
Redux helps a lot, but you still need to think and design.

## Additional resources
[Redux official guides](redux.js.org)
[Redux async actions](http://redux.js.org/docs/advanced/AsyncActions.html)

