import ajaxRequest from './AjaxRequest'

// Action creators can have side-effects
let nextId = 1;

export const addComment = (author, text) => {
  return {
    type: "ADD_COMMENT",
    payload: { author: author, text: text, id: nextId++}
  }
}

export const setAuthor = (author) => {
  return {
    type: "SET_AUTHOR",
    payload: author
  }
}

export const setText = (text) => {
  return {
    type: "SET_TEXT",
    payload: text
  }
}

export const setAuthorFilter = (author) => {
  return {
    type: "SET_AUTHOR_FILTER",
    payload: author
  }
}

export const fetchPost = () => {
  return (dispatch, getState) => {
    const addComments = (comments) => {
      if (getState().fetching.inProgress) {
        comments.forEach(
          (comment) => dispatch(addComment(comment.author, comment.text))
        )

        dispatch(stopCommentFetch())
      }
    }

    const onFetchError = (error) => {
      dispatch(stopCommentFetch())
    }

    ajaxRequest("/Comments.json", "GET", addComments, onFetchError)
  }
}

export const commentFetchRequested = () => {
  return {
    type: "COMMENT_FETCH_REQUESTED",
    payload: {}
  }
}

export const stopCommentFetch = () => {
  return {
    type: "COMMENT_FETCH_STOPPED",
    payload: {}
  }
}
