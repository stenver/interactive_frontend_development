# Redux comment list example

To use:
```
npm install
npm test
```

Install Dev Tools extension https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd

Wrap createStore with `devToolsExtension` if present.
```
const finalCreateStore = R.compose(
  applyMiddleware(thunkMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)
```

let store = finalCreateStore(commentsApp)

open http://localhost:3000  
open Redux Dev Tools extension

## Explanation

Redux Dev tools help us identify actions and state changes, time travel, see diffs that actions make to state etc.  
This all works only if you follow the redux core rules.

[Redux DevTools](https://github.com/gaearon/redux-devtools)
