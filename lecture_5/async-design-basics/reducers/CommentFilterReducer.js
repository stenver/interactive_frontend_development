import R from 'ramda'

const initialState = {
  author: ''
}

const reducer = (state=initialState, action) => {
  switch (action.type) {
  case 'SET_AUTHOR_FILTER':
    return R.merge(state, { author: action.payload })
  default:
    return state
  }


};

export default reducer;
