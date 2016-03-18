define(["react", "react-dom"],
  (React, ReactDOM) => {

  var Comment = React.createClass({
    render() {
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
    render() {
      return (
        <div className="commentList">
          <Comment author="Pete Hunt">This is one comment</Comment>
          <Comment author="Jordan Walke">This is *another* comment</Comment>
        </div>
      );
    }
  });

  var CommentForm = React.createClass({
    getDefaultProps() {
      return {commentFormText: "Some random text"};
    },
    render(){
      return (
        <div className="commentForm">
          {this.props.commentFormText}
        </div>
      );
    }
  });

  var CommentBox = React.createClass({
    render() {
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
