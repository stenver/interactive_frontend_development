import { combineReducers } from 'redux';
import { currentGame } from './CurrentGame';
import { pastGames } from './PastGames';
import R from 'ramda'
import { remote } from './Remote';
import websocket from './Websocket'

export default combineReducers({
  currentGame,
  pastGames,
  remote,
  websocket,
})

export const calculateAccuracy = (game) => {
  const pastWordsForComparing = game.words.slice(0, game.pastInput.length);
  const matchingWords = pastWordsForComparing.filter((element, index) => {
    return game.pastInput[index] == element;
  }).length
  return (matchingWords / game.pastInput.length * 100).toFixed(0);
};

export const calculateWordsPerMinute = (game, endTime) => {
  let minutesPassed = (endTime - game.startTime) / 60;
  return (game.pastInput.length / minutesPassed).toFixed(2);
};

export const calculateTimeElapsed = (startTime, endTime) => {
  if (startTime !== undefined) {
    return (endTime - startTime).toFixed(0);
  }else{
    return "N/A"
  }
};

export const calculateHighestWordsPerMinute = (pastGames) => {
  return R.compose(
    R.reduce(R.max, '0'),
    R.map( (game) => calculateWordsPerMinute(game, game.endTime))
  )(pastGames)
}

export const getCurrentTime = () => {
  return Math.floor(Date.now() / 1000);
};

export const isStarted = (state) => {
  return (state.currentGame.startTime !== undefined ? true : false)
};
