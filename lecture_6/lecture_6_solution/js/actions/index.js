import ajaxRequest from './AjaxRequest';
import { getCurrentTime } from '../reducers';

export const setCurrentInput = (currentInput) => {
  return {
    type: "SET_CURRENT_INPUT",
    payload: { currentInput: currentInput }
  }
}

// https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
function getRandomSubarray(arr, size) {
    var shuffled = arr.slice(0), i = arr.length, temp, index;
    while (i--) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(0, size);
};

export const setWords = (words) => {
  return {
    type: "START_GAME",
    payload: { words: words, startTime: getCurrentTime() }
  }
}

export const startWordFetch = () => {
  return {
    type: "START_WORD_FETCH"
  }
}

export const stopWordFetch = () => {
  return {
    type: "STOP_WORD_FETCH"
  }
}

export const startGame = () => {
  return (dispatch, getState) => {
    const addWords = (words) => {
      if (getState().currentGame.wordFetchInProgress) {
        const randomWords = getRandomSubarray(words, 30);
        dispatch(setWords(randomWords));
        dispatch(stopWordFetch())
      }
    }

    const onFetchError = (error) => {
      dispatch(stopWordFetch())
    }

    ajaxRequest("/Words.json", "GET", addWords, onFetchError)
  }
}

const lastGameStats = (state) => {
  return {
    type: "END_GAME",
    payload: {
      words: state.words,
      pastInput: state.pastInput,
      startTime: state.startTime,
      endTime: Math.floor(Date.now() / 1000)
    }
  }
}

export const endGame = () => {
  return (dispatch, getState) => {
    let state = getState();
    dispatch(lastGameStats(state.currentGame));
  }
}
