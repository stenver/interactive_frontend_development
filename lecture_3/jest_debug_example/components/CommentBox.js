import React from "react";
import ReactDOM from "react-dom";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const CommentBox = (props) => {
  return (
    <div className="commentBox">
      <h1>Comments</h1>
      <CommentList comments={props.comments}/>
      <CommentForm onCommentSubmit={props.onCommentSubmit} />
    </div>
  );
};
CommentBox.propTypes = {
  comments: React.PropTypes.array.isRequired,
  onCommentSubmit: React.PropTypes.func.isRequired,
};
export { CommentBox as default };
