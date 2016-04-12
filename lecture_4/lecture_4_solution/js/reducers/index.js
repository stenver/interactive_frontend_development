
const initialWords = ["does", "short", "unit", "air", "our", "find", "war", "morning", "they"];
const startTime = Math.floor(Date.now() / 1000);
const currentInput = ''
const pastInput = []

const initialState = {
  initialWords: initialWords,
  startTime: startTime,
  currentInput: currentInput,
  pastInput: pastInput
}

const speedTyperReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_INPUT':
      const currentInput = action.payload.currentInput;
      if (currentInput.trim().length > 0 && currentInput[currentInput.length - 1] === " "){
        const newPastInput = state.pastInput.concat(currentInput.trim());
        return { ...state, {currentInput: "", pastInput: newPastInput }};
      }else{
        return { ...state, {currentInput: currentInput }};
      }
    default:
      state
  }
}

export default speedTyperReducer;
