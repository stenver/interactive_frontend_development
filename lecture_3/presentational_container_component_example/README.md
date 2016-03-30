# Presentational container component example

To use:
```
npm install
npm start
```

Open http://localhost:3000 in your browser

## Explanation

Continuing with out input example from lecture 2, this time we have extracted all the react classes to be in separate files.

Look at Comment and CommentList - those are pure functions and presentational components.

Look at CommentBox and CommentBoxContainer - the CommentBoxContainer is the container component - it extracted all the previous CommentBox stateful logic and is concerned with "how stuff works". It doesnt know anything about how stuff looks. The CommentBox is now a pure function and only cares how stuff looks. It just takes in props and renders something.
