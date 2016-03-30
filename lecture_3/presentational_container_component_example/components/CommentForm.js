define(["react", "react-dom"],
  (React, ReactDOM) => {

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
  return CommentForm;
});
