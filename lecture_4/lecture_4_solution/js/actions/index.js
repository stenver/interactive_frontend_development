export const setCurrentInput = (currentInput) => {
  return {
    type: "SET_CURRENT_INPUT",
    payload: { currentInput: currentInput }
  }
}
