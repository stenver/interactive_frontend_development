import React from "react";

var TypingContainer = React.createClass({

  propTypes: {
    onUserInput: React.PropTypes.func.isRequired,
    currentInput: React.PropTypes.string.isRequired,
  },

  handleUserInput: function(e) {
    this.props.onUserInput(e.target.value);
  },

  render: function() {
    return(
      <input
        className="typing-container"
        value={this.props.currentInput}
        onChange={this.handleUserInput}
      / >
    );
  }
});

export { TypingContainer as default };
