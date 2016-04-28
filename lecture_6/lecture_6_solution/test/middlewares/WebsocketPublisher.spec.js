import R from 'ramda'
import publishToWebsocket from '../../js/middlewares/WebsocketPublisher'
import reducer from '../../js/reducers/index'

const initialState = reducer(undefined, {})
const mockNext = R.always({})
const mockAction = {}
const connectedState = R.merge(initialState, { websocket: {connected: true } });

describe('publishToWebsocket', () => {

  it('does not send initial state to websocket', () => {
    const state = connectedState;
    const store = { getState: R.always(state) }
    const sendWebsocketMessage = sinon.stub()
    const publisherMiddleware = publishToWebsocket(sendWebsocketMessage)(store)(mockNext)

    publisherMiddleware(mockAction)
    expect(sendWebsocketMessage).to.not.have.been.called
  })

  it('does not send state to websocket when not connected', () => {
    const store = { getState: R.always(initialState) }
    const sendWebsocketMessage = sinon.stub()
    const publisherMiddleware = publishToWebsocket(sendWebsocketMessage)(store)(mockNext)

    publisherMiddleware(mockAction) // initial state
    publisherMiddleware(mockAction)

    expect(sendWebsocketMessage).to.not.have.been.called
  })

  it('sends relevant state change to websocket when connected', () => {
    let state = connectedState;
    const store = { getState: () => state }
    const sendWebsocketMessage = sinon.stub()
    const publisherMiddleware = publishToWebsocket(sendWebsocketMessage)(store)(mockNext)

    publisherMiddleware(mockAction) // initial state

    const now = Date.now()
    const currentGame = { words: ['billy'], currentInput: 'bul', pastInput: '', startTime: now, wordFetchInProgress: true }
    state = R.merge(state, { currentGame: currentGame, pastGames: [] })

    publisherMiddleware(mockAction)
    expect(sendWebsocketMessage).to.have.been.calledWith({
      currentGame: { words: ['billy'], currentInput: 'bul', pastInput: '', startTime: now},
      pastGames: []
    })
  })

  it('does not send same relevant state to websocket twice', () => {
    let state = connectedState;
    const store = { getState: () => state }
    const sendWebsocketMessage = sinon.stub()
    const publisherMiddleware = publishToWebsocket(sendWebsocketMessage)(store)(mockNext)

    publisherMiddleware(mockAction) // initial state

    const currentGame = { words: ['billy'], currentInput: 'bul', pastInput: '', startTime: Date.now(), wordFetchInProgress: true  }
    state = R.merge(state, { currentGame: currentGame, pastGames: [] })

    publisherMiddleware(mockAction)

    const newCurrentGame = R.merge(currentGame, {wordFetchInProgress: false})
    state = R.merge(state, {currentGame: newCurrentGame})

    publishToWebsocket(sendWebsocketMessage)(store)(mockNext)(mockAction)

    publisherMiddleware
  })

})
