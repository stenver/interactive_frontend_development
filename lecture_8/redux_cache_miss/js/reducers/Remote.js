import R from 'ramda';

const initialState = {}

export const remote = (state=initialState, action) => {
  switch (action.type) {
    case 'RECEIVED_REMOTE_STATE':
      return action.payload;
    default:
      return state;
  }
}
