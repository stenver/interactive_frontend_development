export const receivedState = (state) => {
  return {
    type: 'RECEIVED_REMOTE_STATE',
    payload: state
  }
}
