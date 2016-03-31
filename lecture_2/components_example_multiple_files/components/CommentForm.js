define(["react", "react-dom"],
  (React, ReactDOM) => {

  var CommentForm = React.createClass({
    render: function() {
      return (
        <div className="commentForm">
          Hello, world! I am a CommentForm.
        </div>
      );
    }
  });

  return CommentForm;
})
