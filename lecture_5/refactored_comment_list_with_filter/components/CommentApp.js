import React from "react";
import ReactDOM from "react-dom";
import FilteredCommentList from "../containers/FilteredCommentList";
import CommentForm from "../containers/CommentForm";
import Filter from "../containers/Filter";

const CommentApp = () => {
  return (
    <div className="commentApp">
      <h1>Comments</h1>
      <FilteredCommentList />
      <CommentForm />
      <Filter />
    </div>
  );
};

export default CommentApp;
