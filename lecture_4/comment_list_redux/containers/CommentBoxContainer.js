import React from "react";
import ReactDOM from "react-dom";
import CommentBox from "../components/CommentBox";
import { connect } from 'react-redux'
import { addComment } from '../actions'

const CommentBoxContainer = ({addCommentBounded, comments}) => {
  return (
	<CommentBox
	  comments={comments}
	  onCommentSubmit={addCommentBounded}
	/>
  );
};

const mapStateToProps = (state) => {
  return {
	comments: state.comments
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
	addCommentBounded: ({text, author}) => dispatch(addComment(text, author))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(CommentBoxContainer);
