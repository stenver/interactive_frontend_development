define(["react", "react-dom", "./CommentBox.js"],
  (React, ReactDOM, CommentBox) => {

  var CommentBoxContainer = React.createClass({
    loadCommentsFromServer: function() {
      // Lets mock the data, in reality would fetch it from server. In this case
      // we will simply add same comment to the old data every time a pull is made from "server"
      oldData = this.state.data
      oldData.push({"author": "Sukram", "text": "This is niss thing", "id": Date.now()})
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
        <CommentBox
          data={this.state.data}
          onCommentSubmit={this.handleCommentSubmit}
        />
      );
    }
  });

  return CommentBoxContainer;
});
