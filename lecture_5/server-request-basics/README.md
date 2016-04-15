# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

In this example we will add a simple request to the server.
We will use `XMLHttpRequest` in `AjaxRequest.js` to abstract the request.
We will define a simple JSON file `Comments.json` which will be automatically server by the webpack-dev-server.
We will request the Comments in `fetchPost` action creator using an actual request to a web-server.

## Testing

Sinon provides facilities to mock `XMLHttpRequest`, through [useFakeXMLHttpRequest](http://sinonjs.org/docs/#server).
It's usage can be seen in `FetchAction-test.js`
