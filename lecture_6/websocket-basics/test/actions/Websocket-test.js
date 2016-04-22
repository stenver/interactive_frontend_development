import {websocketConnectionRequested, sendWebsocketMessage} from '../../actions/Websocket'

import { WebSocket, Server } from 'mock-socket'

const actualWebSocket = window.WebSocket;
let clock, dispatch, getState;

describe('Websocket actions', () => {
  let mockServer;

  before(() => {
    global.WebSocket = WebSocket;
    clock = sinon.useFakeTimers()
  })
  after(() => {
    global.WebSocket = actualWebSocket;
    clock.restore()
  })

  beforeEach(() => {
    dispatch = sinon.stub()
    getState = sinon.stub()
    mockServer = new Server('ws://localhost:8081')
  })

  afterEach(() => {
    mockServer.close()
  })

  describe("websocketConnectionRequested", () => {
    beforeEach(() => {
      websocketConnectionRequested()(dispatch, getState)
      // There is delay before onopen is called in the mock websocket
      // https://github.com/thoov/mock-socket/blob/master/src/helpers/delay.js
      clock.tick(100)
    })

    it("dispatches established action when connected to server", () => {
      expect(dispatch).to.have.been.calledWith({
        type: 'WEBSOCKET_CONNECTION_ESTABLISHED',
        payload: {}
      })
    })

    it("dispatches dropped action when disconnected from server", () => {
      mockServer.close()
      expect(dispatch).to.have.been.calledWith({
        type: 'WEBSOCKET_CONNECTION_DROPPED',
        payload: {}
      })
    })
  })

  describe("sendWebsocketMessage", () => {
    it("sends stringified message to server", () => {
      websocketConnectionRequested()(dispatch, getState)
      const onMessage = sinon.stub()
      mockServer.on('message', onMessage)
      sendWebsocketMessage({a: 1})

      expect(onMessage).to.have.been.calledWith('{"a":1}')
    })
  })

})
