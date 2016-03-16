define(["react", "react-dom"],
  (React, ReactDOM) => {

  var Comment = React.createClass({
    propTypes: {
      author: React.PropTypes.string.isRequired,
      children: React.PropTypes.node.isRequired,
    },

    render: function() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      );
    }
  });

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
