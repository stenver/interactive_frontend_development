import React from "react";
import FilteredCommentList from "../containers/FilteredCommentList";
import CommentFilter from "../containers/CommentFilter";

export default (_) => {
  return (
    <div>
      <h2>Local comments</h2>
      <FilteredCommentList />
      <CommentFilter />
    </div>
  )
}
