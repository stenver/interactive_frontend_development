import React from "react";
import ReactDOM from "react-dom";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import Filter from "./Filter"

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
      <Filter
        authors={props.allAuthors}
        selectedAuthor={props.filteredByAuthor}
        onSelectAuthor={props.handleAuthorFilterChange}
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
  handleSubmit: React.PropTypes.func.isRequired,
  allAuthors: React.PropTypes.arrayOf(React.PropTypes.string.isRequired).isRequired,
  handleAuthorFilterChange: React.PropTypes.func.isRequired,
  filteredByAuthor: React.PropTypes.string
};

export default CommentBox;
