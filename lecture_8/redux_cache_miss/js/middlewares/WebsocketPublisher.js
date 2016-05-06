import R from 'ramda'

const publishToWebsocket = (sendWebsocketMessage) => {
  let previousRelevantState;

  return (store) => (next) => (action) => {
    const result = next(action);
    const state = store.getState();

    const relevantState = {
      currentGame: R.pick(['words', 'currentInput', 'pastInput', 'startTime'])(state.currentGame),
      pastGames: state.pastGames
    }

    if (state.websocket.connected && previousRelevantState && !R.equals(previousRelevantState, relevantState)) {
      sendWebsocketMessage(relevantState)
    }

    previousRelevantState = relevantState;

    return result;
  }
}


export default publishToWebsocket
