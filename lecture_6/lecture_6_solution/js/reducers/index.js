import { combineReducers } from 'redux';
import { currentGame } from './CurrentGame';
import { pastGames } from './PastGames';

export default combineReducers({
  currentGame,
  pastGames
})

export const calculateAccuracy = (state) => {
  const pastWordsForComparing = state.words.slice(0, state.pastInput.length);
  const matchingWords = pastWordsForComparing.filter((element, index) => {
    return state.pastInput[index] == element;
  }).length
  return (matchingWords / state.pastInput.length * 100).toFixed(0);
};

export const calculateWordsPerMinute = (state, endTime) => {
  let minutesPassed = (endTime - state.startTime) / 60;
  return (state.pastInput.length / minutesPassed).toFixed(2);
};

export const calculateTimeElapsed = (startTime, endTime) => {
  if (startTime !== undefined) {
    return (endTime - startTime).toFixed(0);
  }else{
    return "N/A"
  }
};

export const getCurrentTime = () => {
  return Math.floor(Date.now() / 1000);
};

export const isStarted = (state) => {
  return (state.currentGame.startTime !== undefined ? true : false)
};
