define(["react", "react-dom", "./CommentList", "./CommentForm"],
  (React, ReactDOM, CommentList, CommentForm) => {

  var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList comments={this.props.comments}/>
          <CommentForm />
        </div>
      );
    }
  });

  return CommentBox;
});
