import React from "react";
import ReactDOM from "react-dom";
import CommentApp from "../components/CommentApp";
import { connect } from 'react-redux'
import { addComment, setAuthor, setText, setAuthorFilter } from '../actions'

const mapStateToProps = (state) => {
  let filteredComments;
  if (!state.filteredByAuthor) {
    filteredComments = state.comments;
  } else {
    filteredComments = state.comments.filter(
      (comment) => comment.author === state.filteredByAuthor
    )
  }

  const isFirstOfThisValue = (value, index, self) => {
    return self.indexOf(value) === index;
  }
  const allAuthors = state.comments
    .map((comment) => comment.author)
    .filter(isFirstOfThisValue) // unique values

  return {
    comments: filteredComments,
    text: state.text,
    author: state.author,
    filteredByAuthor: state.filteredByAuthor,
    allAuthors: allAuthors
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text, author) => dispatch(addComment(text, author)),
    handleAuthorChange: (author) => dispatch(setAuthor(author)),
    handleTextChange: (text) => dispatch(setText(text)),
    handleAuthorFilterChange: (author) => dispatch(setAuthorFilter(author))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentApp);
