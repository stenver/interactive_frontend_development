# Redux cache miss

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

We have separated past, current and next words into different components.
We have also created containers for each of those components.
The containers create views of the current game state which seldom change.

We have also added `console.count(label)` calls to count how many times we are re-rendering.

We have improved the architecture of our application, but we are still re-rendering all the time.
This is because redux only checks shallow equality of the result of `mapStateToProps`.
We are creating new objects every time in `mapStateToProps` which cause shallow equality to be false.
