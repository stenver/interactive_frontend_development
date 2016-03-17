define(["react", "react-dom"],
  (React, ReactDOM) => {

  var Comment = React.createClass({
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
      var commentNodes = this.props.data.map(function(comment) {
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        );
      });
      return (
        <div className="commentList">
          {commentNodes}
        </div>
      );
    }
  });

  var CommentForm = React.createClass({
    getInitialState: function() {
      return {author: '', text: ''};
    },
    handleAuthorChange: function(e) {
      this.setState({author: e.target.value});
    },

    render: function() {
      return (
        <div>
          <input
            type="text"
            placeholder="Say something..."
            value="Some static value"
          />
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange}
          />
        </div>
      );
    }
  });

  var CommentBox = React.createClass({
    loadCommentsFromServer: function() {
      // Lets mock the data, in reality would fetch it from server. In this case
      // we will simply add same comment to the old data every time a pull is made from "server"
      oldData = this.state.data
      oldData.push({"author": "Sukram", "text": "This is niss thing"})
      this.setState({data: oldData});
    },

    getInitialState: function() {
      return {data: []};
    },

    componentDidMount: function() {
      this.loadCommentsFromServer();
      setInterval(this.loadCommentsFromServer, 10000);
    },

    handleCommentSubmit: function(comment) {
      // Mock out server submitting and simply push the comment to existing data
      oldData = this.state.data
      oldData.push(comment)
      this.setState({data: oldData});
    },

    render: function() {
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.state.data}/>
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
  });

  ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
  );
});

