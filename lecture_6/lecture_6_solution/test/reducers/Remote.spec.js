import { remote } from '../../js/reducers/Remote'

describe('remote', () => {
  it("has empty object initial state", () => {
    const result = remote(undefined, {})
    expect(result).to.eql({})
  })

  context('RECEIVED_REMOTE_STATE', () => {
    it("replaces state with action payload", () => {
      const initialState = remote(undefined, {})

      const action = {
        type: 'RECEIVED_REMOTE_STATE',
        payload: {words: ['billy', 'jean',], currentInput: 'bully'}
      }

      const newState = remote(initialState, action)
      expect(newState).to.eql(action.payload)
    })
  })

})
