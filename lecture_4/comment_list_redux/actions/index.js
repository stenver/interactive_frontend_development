// Action creators can have side-effects
let nextId = 1;

export const addComment = (author, text) => {
  return {
    type: "ADD_COMMENT",
    payload: { author: author, text: text, id: nextId++}
  }
}
