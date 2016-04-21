# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

In this example we will create a no-op middleware just to see how the middleware chaining works 
and where the middleware execution takes place.

Check main.js for how the middleware is set up.

Type into the author input and check the JavaScript console.
You can also expand the middleware log statements to see the call stack.

From the logs, you can see the order of execution:

* we use the action creator to create an action
* we dispatch the action
* our first middleware (before calling next) is called
  * our first middleware calls next
* our second middleware (before calling next) is called
  * our second middleware calls next
* our reducer is finally reached (reducer is the last *next*)
* call stack returns to the second middleware
* call stack returns to the first middleware
