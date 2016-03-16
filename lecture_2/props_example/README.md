# Webpack-dev-server example

To use:
```
npm install
npm start
```

Open http://localhost:3000 in your browser

## Explanation

We created a Comment component which has props. The values to the props are handed by comment list. The props are immutable in Comment component and cannot be changed.

The props.children in the end of Comment renders whatever child nodes were passed down from the parent. In this case the comment text.
