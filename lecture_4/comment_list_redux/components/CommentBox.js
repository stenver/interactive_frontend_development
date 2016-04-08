import React from "react";
import ReactDOM from "react-dom";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const CommentBox = (props) => {
  return (
    <div className="commentBox">
      <h1>Comments</h1>
      <CommentList comments={props.comments}/>
      <CommentForm
        author={props.author}
        text={props.text}
        handleAuthorChange={props.handleAuthorChange}
        handleTextChange={props.handleTextChange}
        handleSubmit={props.handleSubmit}
      />
    </div>
  );
};

CommentBox.propTypes = {
  comments: React.PropTypes.array.isRequired,
  author: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired,
  handleAuthorChange: React.PropTypes.func.isRequired,
  handleTextChange: React.PropTypes.func.isRequired,
  handleSubmit: React.PropTypes.func.isRequired
};

export default CommentBox;
