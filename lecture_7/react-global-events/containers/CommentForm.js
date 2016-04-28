import React from "react";
import ReactDOM from "react-dom";
import CommentForm from "../components/CommentForm";
import { connect } from 'react-redux'
import { addComment, setAuthor, setText } from '../actions'
import { push } from 'react-router-redux'

const mapStateToProps = (state) => {
  return {
    text: state.form.text,
    author: state.form.author
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text, author) => {
      dispatch(addComment(text, author));
      dispatch(push("/comments"))
    },
    handleAuthorChange: (author) => dispatch(setAuthor(author)),
    handleTextChange: (text) => dispatch(setText(text)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
