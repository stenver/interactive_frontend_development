# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

We have added pages to our application, but the state on which pages we have been
is not stored in redux. This means that we cannot use redux timetravel effectively.

We want to combine the Redux store and React router.
We also want to dispatch redux actions to change routes instead of using React router directly.
```
npm install react-router-redux --save
```

We'll enhance the history in `main.js` with `syncHistoryWithStore` and pass that to our routes component.

We'll also need a reducer under the `routing` slice. This is provided as `routerReducer` from `react-router-redux`.

We'll use the `routerMiddleware` so we can dispatch actions instead of using React router history directly.

Let's remove using the `browserHistory` from the `addComment` action to keep it simple. And instead dispatch `push("/comments")` from the `CommentForm` container.

## Additional resources
[React Router Redux](https://github.com/reactjs/react-router-redux)  
[React Router](https://github.com/reactjs/react-router)  
[Redux DevTools](https://github.com/zalmoxisus/redux-devtools-extension)
