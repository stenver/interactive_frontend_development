const initialState = {
  author: ''
}

const merge = (obj1, obj2) => Object.assign({}, obj1, obj2)

const reducer = (state=initialState, action) => {
  switch (action.type) {
  case 'SET_AUTHOR_FILTER':
    return merge(state, { author: action.payload })
  default:
    return state
  }


};

export default reducer;
