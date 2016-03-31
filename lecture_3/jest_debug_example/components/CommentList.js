import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";

const CommentList = (props) => {
  return (
    <div className="commentList">
      {comments}
    </div>
  );
};
CommentList.propTypes = {
  data: React.PropTypes.array.isRequired,
};
export { CommentList as default };
