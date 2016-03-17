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
  Comment.propTypes= {
    author: React.PropTypes.string.isRequired,
    children: React.PropTypes.node.isRequired,
  };

  var CommentList = React.createClass({
    render: function() {
      return (
        <div className="commentList">
          <Comment author="Some guy">This is one comment</Comment>
          <Comment author="Jordan Walke">This is *another* comment</Comment>
          <Comment author="Jordan Walke"></Comment>
          <Comment author={1}></Comment>
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
    <CommentBox />,
    document.getElementById('content')
  );
});
