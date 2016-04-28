import React from "react";
import ReactDOM from "react-dom";
import FilteredCommentList from "../containers/FilteredCommentList";
import CommentForm from "../containers/CommentForm";
import CommentFilter from "../containers/CommentFilter";
import RemoteComments from "../containers/RemoteComments";

const CommentApp = () => {
  return (
    <div className="commentApp">
      <h1>Comments</h1>
      <FilteredCommentList />
      <CommentForm />
      <CommentFilter />
      <RemoteComments />
    </div>
  );
};

export default CommentApp;
