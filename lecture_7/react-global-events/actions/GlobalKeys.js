export const keyPressed = (key) => {
  return {
    type: 'GLOBAL_KEY_PRESSED',
    payload: {key: key}
  }
}
