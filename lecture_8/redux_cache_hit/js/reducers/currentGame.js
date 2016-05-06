import R from 'ramda';

const words = [];
const startTime = undefined;
const currentInput = ''

const initialState = {
  words: words,
  startTime: undefined,
  currentInput: '',
  pastInput: [],
  wordFetchInProgress: false
}

export const currentGame = (state = initialState, action) => {
  switch (action.type) {
    case 'START_WORD_FETCH':
      return R.merge(state, { wordFetchInProgress: true } );
    case 'STOP_WORD_FETCH':
      return R.merge(state, { wordFetchInProgress: false } );
    case 'SET_CURRENT_INPUT':
      const currentInput = action.payload.currentInput;
      if (currentInput.trim().length > 0 && currentInput[currentInput.length - 1] === " "){
        const newPastInput = R.concat(state.pastInput, [currentInput.trim()]);
        return R.merge(state,  {currentInput: "", pastInput: newPastInput });
      }else{
        return R.merge(state, {currentInput: currentInput });
      }
    case 'START_GAME':
      return R.merge(state, {
        startTime: action.payload.startTime,
        currentInput: '',
        pastInput: [],
        words: action.payload.words
      });
    case 'END_GAME':
      return R.merge(state, { startTime: undefined, currentInput: '' });
    default:
      return state;
  }
}

