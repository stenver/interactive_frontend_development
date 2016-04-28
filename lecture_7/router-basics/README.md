# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

Let's add some paging to our single page app.

First install the react router.
This allows creating pages that map to React components.
```
npm install react-router --save
```

Next let's create our route configuration.  
We can create it using JSX or by using simple JS objects.  
Let's use JSX in `Routes.js`  

We will replace our top level component `CommentApp.js` with `Routes.js`.  
Let's extract the previous parts of `CommentApp.js` into `CommentListWithFilter` and add `AppWrapper` to have links in the top of our application.

In `Routes.js`, the `Router` component modifies browser history using the browser history API.

Then we create Route components that represent components that will be displayed for a certain url.  
We will use "/" router for the main view.  
If we nest Routes then only the children that's path matches the url will be shown.  
The Routes can be composed and nested infinitely as anything in React.

As not all the components are immediately visible, we'll create `Link` elements in `AppWrapper` to create links which navigate to other parts of our system.  
We can use wildcard parameters in Routes, the values of which will be passed as props.params to our components.

We can also navigate in redux action creators by using `browserHistory` directly.  
Remember that this cannot be done in reducers or the pure components.  
This is done in `actions/index.js`

## Additional resources
[React Router](https://github.com/reactjs/react-router)
