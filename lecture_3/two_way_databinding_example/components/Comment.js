define(["react", "react-dom"],
  (React, ReactDOM) => {

  const Comment = (props) => {
    return (
      <div className="comment">
        <h2 className="commentAuthor">
          {props.author}
        </h2>
        {props.children}
      </div>
    );
  };
  Comment.propTypes = {
    author: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
  };
  return Comment;
});
