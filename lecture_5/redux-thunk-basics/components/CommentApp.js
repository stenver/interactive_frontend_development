import React from "react";
import ReactDOM from "react-dom";
import FilteredCommentList from "../containers/FilteredCommentList";
import CommentForm from "../containers/CommentForm";
import CommentFilter from "../containers/CommentFilter";
import Fetcher from "../containers/Fetcher";

const CommentApp = () => {
  return (
    <div className="commentApp">
      <h1>Comments</h1>
      <FilteredCommentList />
      <CommentForm />
      <CommentFilter />
      <Fetcher />
    </div>
  );
};

export default CommentApp;
