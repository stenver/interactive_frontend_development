import reducer from '../../js/reducers/Websocket.js'

describe('Websocket reducer', () => {

  it('is not connected initially', () => {
    expect(reducer(undefined, {})).to.eql({
      connected: false
    })
  })

  context('WEBSOCKET_CONNECTION_ESTABLISHED', () => {

    it('sets connection as connected', () => {
      const action = { type: 'WEBSOCKET_CONNECTION_ESTABLISHED' }
      expect(reducer(undefined, action)).to.eql({
        connected: true
      })
    })
  })

  context('WEBSOCKET_CONNECTION_DROPPED', () => {
    it('sets connection as not connected', () => {
      const action = { type: 'WEBSOCKET_CONNECTION_DROPPED' }
      expect(reducer(undefined, action)).to.eql({
        connected: false
      })
    })
  })

})
