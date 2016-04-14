const words = ["does", "short", "unit", "air", "our", "find", "war", "morning", "they"];
const startTime = Math.floor(Date.now() / 1000);
const currentInput = ''
const pastInput = []

const initialState = {
  words: words,
  startTime: startTime,
  currentInput: currentInput,
  pastInput: pastInput
}

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2)

const speedTyperReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_INPUT':
      const currentInput = action.payload.currentInput;
      if (currentInput.trim().length > 0 && currentInput[currentInput.length - 1] === " "){
        const newPastInput = state.pastInput.concat(currentInput.trim());
        return merge(state,  {currentInput: "", pastInput: newPastInput });
      }else{
        return merge(state, {currentInput: currentInput });
      }
    default:
      return state;
  }
}

export const calculateAccuaracy = (state) => {
  const pastWordsForComparing = state.words.slice(0, state.pastInput.length);
  let matchingWords = 0;
  pastWordsForComparing.forEach(function(element, index){
    if (state.pastInput[index] == element){
      matchingWords += 1;
    }
  });
  return (matchingWords / state.pastInput.length * 100).toFixed(0);
};

export  const calculateWordsPerMinute = (state) => {
  let now = Math.floor(Date.now() / 1000)
  let minutesPassed = (now - state.startTime) / 60;
  return (state.pastInput.length / minutesPassed).toFixed(2);
};

export default speedTyperReducer;
