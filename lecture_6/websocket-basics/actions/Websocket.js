const websocketConf = {
  port: 8081,
  host: 'localhost'
}

let websocketConnection;
export const websocketConnectionRequested = () => {
  return (dispatch, getState) => {
    websocketConnection = new WebSocket(
      `ws://${websocketConf.host}:${websocketConf.port}/`,
      'echo-protocol'
    );

    websocketConnection.onopen = () => {
      dispatch(websocketConnectionEstablished())
    }

    websocketConnection.onclose = () => {
      dispatch(websocketConnectionDropped())
    }

    websocketConnection.onmessage = (message) => {
      let parsedMessage;
      try {
        parsedMessage = JSON.parse(message.data)
      } catch (error) {
        console.log("error parsing websocket message", message.data)
      }
      console.log("received from websocket", parsedMessage)
    }
  };
}

// This should not be used directly in containers.
// It is impure and is not an action.
// Other action creators should import this and wrap with the domain action
export const sendWebsocketMessage = (message) => {
  try {
    console.log("Sending message to websocket", message)
    websocketConnection.send(JSON.stringify(message))
  } catch (error) {
    console.error("Cannot stringify websocket message", error, message)
  }
}

const websocketConnectionEstablished = () => {
  console.log("connected to websocket")
  return {
    type: "WEBSOCKET_CONNECTION_ESTABLISHED",
    payload: {}
  }
}

const websocketConnectionDropped = () => {
  console.log("disconnected from websocket")
  return {
    type: "WEBSOCKET_CONNECTION_DROPPED",
    payload: {}
  }
}
