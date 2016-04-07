# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

All the test are in the test/ folder.

Package json has following new deps:

* [redux](https://github.com/reactjs/redux)
* [react-redux](https://github.com/reactjs/react-redux)

Redux is the core design pattern and react-redux adds the necessary bindings for use of React.

Since our comment app was very primitive, there were little changes that we actually needed to do.

The actions has our only possible action - adding the comment. We are using the [flux standard format](https://github.com/acdlite/flux-standard-action) for action shape.

The reducer was built with extensibility in mind - we are reducing comments from the global state into reducer called `comments`. Though right now this is our only reducer other than the top-level reducer, its simple to add more state later if needed. We also define the initial state of the `comments` in the app by passing an initial comment in the `comments` reducer.

The CommentBoxContainer has been turned into pure function. We use the `connect` keyword to bind it to the Redux stores.
The `mapStateToProps` maps the global state for the CommentBoxContainer into props that are passed down to CommentBox.
The 'mapDispatchToProps` creates our bounded action creator which is handed to CommentBox. This dispatcher is passed all the way down to CommentForm, which will call it when new comment is submitted.

Our main.js creates our global store with the top-level reducer and then <Provider> component is used to make it possible for all the react components to access the store.

## Additional resources
[Redux official guides](redux.js.org)
