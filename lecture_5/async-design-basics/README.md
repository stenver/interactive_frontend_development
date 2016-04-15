# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

In this example we will improve our asyncronous action creators.
More precisely, we will
* Reflect in the UI that a request is in flight
* Disable concurrent requests 
* Reenable requests when request has finished

The user experience can be further improved by allowing cancelation etc.

A main take-away is to separate the action corresponding to the user interaction 
from the asynchronous actions that does the actual work.
They are dispatched right after each other currently, but this allows for much more flexibility down the line.

Again, this is all covered in [Redux async actions](http://redux.js.org/docs/advanced/AsyncActions.html).

## Additional resources
[Redux official guides](redux.js.org)
[Redux async actions](http://redux.js.org/docs/advanced/AsyncActions.html)

