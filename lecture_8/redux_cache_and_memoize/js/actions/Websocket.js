import { receivedState } from "./Remote.js"

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
        const action = receivedState(parsedMessage)
        dispatch(action)
      } catch (error) {
        console.error("error parsing websocket message", error, message.data)
      }
    }
  };
}

// This should not be used directly in containers.
// It is impure and is not an action.
// Other action creators should import this and wrap with the domain action
export const sendWebsocketMessage = (message) => {
  try {
    websocketConnection.send(JSON.stringify(message))
  } catch (error) {
    console.error("Cannot stringify websocket message", error, message)
  }
}

const websocketConnectionEstablished = () => {
  return {
    type: "WEBSOCKET_CONNECTION_ESTABLISHED",
    payload: {}
  }
}

const websocketConnectionDropped = () => {
  return {
    type: "WEBSOCKET_CONNECTION_DROPPED",
    payload: {}
  }
}
