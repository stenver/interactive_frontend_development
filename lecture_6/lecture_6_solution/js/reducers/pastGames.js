import R from 'ramda';

export const pastGames = (state = [], action) => {
  switch (action.type) {
    case 'END_GAME':
      return R.concat(state, {
        words: action.payload.words,
        pastInput: action.payload.pastInput,
        startTime: action.payload.startTime,
        endTime: action.payload.endTime
      });
    default:
      return state;
  }
}
