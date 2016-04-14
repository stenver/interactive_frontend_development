# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

We have added a select element to filter by author to the comment application.

First we thought what the state would look like.
In this case just the `filteredByAuthor` value was added to state.

It works fine, but all the reducers are in one function and the CommentBoxContainer is getting larger and larger.
The next example will work on refactoring.

## Additional resources
[Redux official guides](redux.js.org)
