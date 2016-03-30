define(["react", "react-dom", "./Comment.js"],
  (React, ReactDOM, Comment) => {

  const CommentList = (props) => {
    var comments = props.data.map((comment) => {
      return <Comment author={comment.author} key={comment.id}>{comment.text}</Comment>;
    })
    return (
      <div className="commentList">
        {comments}
      </div>
    );
  };
  CommentList.propTypes = {
    data: React.PropTypes.array.isRequired,
  };
  return CommentList;
});
