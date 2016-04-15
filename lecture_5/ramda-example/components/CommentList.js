import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";

const CommentList = (props) => {
  var comments = props.comments.map((comment) => {
    return <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>;
  })
  return (
    <div className="commentList">
      {comments}
    </div>
  );
};
CommentList.propTypes = {
  comments: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      author: React.PropTypes.string.isRequired,
      text: React.PropTypes.string.isRequired,
      id: React.PropTypes.number.isRequired
    })
  ).isRequired,
};
export { CommentList as default };
