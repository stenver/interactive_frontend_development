# Redux cache miss

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

Let's use _reselect_ to implement memoization for our `mapStateToProps` selector functions.

`npm install --save reselect`

Let's use reselect in `PastWordsContainer` and `NextWordsContainer`

Now we are only re-rendering all the words when moving on to a new word.
