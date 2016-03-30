define(["react", "react-dom", "./CommentBox.js"],
  (React, ReactDOM, CommentBox) => {

  var CommentBoxContainer = React.createClass({
    loadCommentsFromServer: function() {
      // Lets mock the data, in reality would fetch it from server. In this case
      // we will simply add same comment to the old data every time a pull is made from "server"
      // !!Note that this is not functional approach, as we mutate existing data, instead of
      // returning a new object!!
      oldData = this.state.data
      oldData.push({"author": "Sukram", "text": "This is niss thing", "id": Date.now()})
      this.setState({data: oldData});
    },

    getInitialState: function() {
      return {data: []};
    },

    componentDidMount: function() {
      this.loadCommentsFromServer();
    },

    handleCommentSubmit: function(comment) {
      // Mock out server submitting and simply push the comment to existing data
      oldData = this.state.data
      // You shouldnt mutate data, but we just mock out server response in here,
      // which has assigned ID to the comment
      comment.id = Date.now()
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
