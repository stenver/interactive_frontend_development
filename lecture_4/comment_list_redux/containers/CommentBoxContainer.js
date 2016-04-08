import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "../components/CommentBox";
import { connect } from 'react-redux'
import { addComment, setAuthor, setText } from '../actions'

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
    text: state.text,
    author: state.author
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text, author) => dispatch(addComment(text, author)),
    handleAuthorChange: (author) => dispatch(setAuthor(author)),
    handleTextChange: (text) => dispatch(setText(text))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBox);
