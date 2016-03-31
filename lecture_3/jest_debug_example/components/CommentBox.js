import React from "react";
import ReactDOM from "react-dom";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

const CommentBox = (props) => {
  debugger
  return (
    <div className="commentBox">
      <h1>Comments</h1>
      <CommentList data={props.data}/>
      <CommentForm onCommentSubmit={props.onCommentSubmit} />
    </div>
  );
};
CommentBox.propTypes = {
  data: React.PropTypes.array.isRequired,
  onCommentSubmit: React.PropTypes.func.isRequired,
};
export { CommentBox as default };
