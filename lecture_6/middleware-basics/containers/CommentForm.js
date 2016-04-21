import React from "react";
import ReactDOM from "react-dom";
import CommentForm from "../components/CommentForm";
import { connect } from 'react-redux'
import { addComment, setAuthor, setText } from '../actions'

const mapStateToProps = (state) => {
  return {
    text: state.form.text,
    author: state.form.author,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleSubmit: (text, author) => dispatch(addComment(text, author)),
    handleAuthorChange: (author) => {
      let action = setAuthor(author)
      console.log("dispatch action!")
      dispatch(action)
    },
    handleTextChange: (text) => dispatch(setText(text)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
