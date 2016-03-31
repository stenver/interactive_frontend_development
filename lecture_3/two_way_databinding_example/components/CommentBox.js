define(["react", "react-dom", "./CommentList.js", "./CommentForm.js"],
  (React, ReactDOM, CommentList, CommentForm) => {

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

  return CommentBox;
});
