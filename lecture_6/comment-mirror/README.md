# Redux comment list example

To use:
```
npm install
npm test
```

open http://localhost:3000

## Explanation

In this example we will allow two browsers to exchange comments directly.
We will send the app state whenever comments change through the websocket server to the other browser.
The other browser will merge the websocket messages into state and show the comments from the first mentioned browser.
Care must be taken not to create infinite ping-pong between the browsers,
when only the "remote comments" part of the state changes, an update should not be sent to the server.

### Websocket server

We will create the simplest implementation as a proof of concept.
We will broadcast any message that a browser sends to all others.
This is done in `server/HandleIncomingWebSockets.js`

### Websocket client

Let's send all the local comments to the websocket server.
Let's do so only if the local comments have changed to avoid infinitely bouncing messages.
This is done in `main.js`

Let's dispatch an action called `RECEIVED_REMOTE_COMMENTS` when we get a message from the websocket. We are not handling different kinds of messages at the moment.
This is done in `actions/Websocket.js`.

Now the only thing that is necessary is to reduce the action into application state and display it.
This is done in a trivial `reducers/RemoteReducer.js` and in the `RemoteComments` container which reuses `CommentList` and passes remote comments as comments to the `CommentList`.


This syncing mechanism can be used to display arbitrary information from the other browser. The input, the filter and so on.  
When doing so care must be taken to disable the inputs and filters to indicate to the user that the inputs can't be interacted with.  
Alternatively new components can be made which show the information without inputs or select elements.
