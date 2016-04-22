import React from "react";
import ReactDOM from "react-dom";

const Typing = React.createClass({
  componentDidUpdate: function(){
    if (!this.props.disabled) {
      ReactDOM.findDOMNode(this.refs.typingInput).focus();
    };
  },

  render: function() {
    const handleUserInput = (event) => this.props.onUserInput(event.target.value);

    return(
      <input
        className="typing-container"
        disabled={this.props.disabled}
        value={this.props.currentInput}
        onChange={handleUserInput}
        ref="typingInput"
      / >
    );
  }
});

Typing.propTypes = {
  onUserInput: React.PropTypes.func.isRequired,
  currentInput: React.PropTypes.string.isRequired,
  disabled: React.PropTypes.bool.isRequired
};

export default Typing;
