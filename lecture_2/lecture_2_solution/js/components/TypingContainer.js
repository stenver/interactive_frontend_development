define(["react"], (React) => {
  var TypingContainer = React.createClass({

    getInitialState: function() {
      return {text: ''};
    },
    handleChange: function(e) {
      this.setState({text: e.target.value});
    },

    render: function() {
      return(
        <input
          className="typing-container"
          value={this.state.text}
          onChange={this.handleChange}
        / >
      );
    }
  })
  return TypingContainer;
});
