# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

### Websocket server

We need an actual server to handle websocket requests.
For this we will create server.js,
which will both start the webpack dev server and a websocket server on a different port.

Install websocket server: 
```
npm install --save websocket
```

We also need to remove `devServer` param from webpack config,  
replace it with an entry for the webpack-dev-server reload client (which also uses websockets by the way!),  
and manually specify the path for output.

Now we can run the websocket dev server programmatically in `server.js`.

We also changed package.json `start` command to be `node server.js`, to keep the interface to our program the same,  
and the startup as simple and standard.


### Websocket client

Browsers natively support websocket protocol through the `WebSocket` object.

We have learned to use asynchronous action creators so connecting to websocket and receiving messages is a matter of creating necessary asynchronous action creators.
They are gathered to `actions/Websocket.js`

A simple reducer to handle the connection state is created in `reducers/Websocket.js`

In this example incoming websocket messages are not handled.

### Testing
(mock-socket)[https://github.com/thoov/mock-socket] can be used.

```
npm install --save-dev mock-socket
```

We can replace the global WebSocket object in the test.
We can use the mock server to interact with the WebSocket connection.
We can listen for messages on the server object, send responses and even close the server.
We will test at the redux-integration level.
