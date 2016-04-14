# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

We will split up the reducers and use combineReducers to combine them back together.
This allows separation of concerns between filtering and inserting comments.
The state object also is cleaner, values like 'author' are namespaced to either the filter or the form.

## Additional resources
[Redux official guides](redux.js.org)
