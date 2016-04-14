import React from "react";
import ReactDOM from "react-dom";
import FilteredCommentList from "../containers/FilteredCommentList";
import CommentFormContainer from "../containers/CommentFormContainer";
import FilterContainer from "../containers/FilterContainer";

const CommentBox = () => {
  return (
    <div className="commentBox">
      <h1>Comments</h1>
      <FilteredCommentList />
      <CommentFormContainer />
      <FilterContainer />
    </div>
  );
};

export default CommentBox;
