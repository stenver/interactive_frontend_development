import R from 'ramda'

const initialState = {
  input: ""
}

const createReducer = (initialState, actionEvolveMap) => {
  return (state=initialState, action) => {
    const evolver = actionEvolveMap[action.type];
    if (evolver) {
      return R.evolve(evolver(action))(state)
    } else {
      return state;
    }
  }
}

const reducer = createReducer(initialState, {
  'GLOBAL_KEY_PRESSED': (action) => {
    return {
      input: R.append(action.payload.key)
    }
  }
});

export default reducer;
