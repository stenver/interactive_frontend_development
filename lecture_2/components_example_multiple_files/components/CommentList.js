define(["react", "react-dom"],
  (React, ReactDOM) => {

  var CommentList = React.createClass({
    render: function() {
      var comments = this.props.comments
        .map((comment, i) => <div key={i}>{comment}</div>)

      return (
        <div className="commentList">
          Hello, world! I am a CommentList.
          {comments}
        </div>
      );
    }
  });

  return CommentList;
});
