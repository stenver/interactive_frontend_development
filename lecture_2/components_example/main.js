define(["react", "react-dom"],
  (React, ReactDOM) => {

  var CommentList = React.createClass({
    render: function() {
      return (
        <div className="commentList">
          Hello, world! I am a CommentList.
        </div>
      );
    }
  });

  var CommentForm = React.createClass({
    render: function() {
      return (
        <div className="commentForm">
          Hello, world! I am a CommentForm.
        </div>
      );
    }
  });

  // This component is invalid - Adjacent JSX elements must be wrapped in an enclosing tag
  // var InvalidComponent = React.createClass({
  //   render: function() {
  //     return (
  //       <div className="commentForm">
  //         Hello, world! I am a CommentForm.
  //       </div>
  //       <div className="commentForm">
  //         Hello, world! I am a CommentForm.
  //       </div>
  //     );
  //   }
  // });

  var CommentBox = React.createClass({
    render: function() {
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList />
          <CommentForm />
        </div>
      );
    }
  });

  ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content')
  );
});
