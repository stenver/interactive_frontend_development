import React from "react";
import SpeedTyper from "./SpeedTyper";

var SpeedTyperContainer = React.createClass({
  getInitialState: function() {
    return {
      currentInput: "",
      pastInput: []
    };
  },

  getDefaultProps: function() {
    return {
      words: ["does", "short", "unit", "air", "our", "find", "war", "morning", "they"],
      startTime: Math.floor(Date.now() / 1000)
    };
  },

  handleUserInput: function(currentInput) {
    if (currentInput.trim().length > 0 && currentInput[currentInput.length - 1] === " "){
      const pastInput = this.state.pastInput;
      const newPastInput = pastInput.concat(currentInput.trim());
      this.setState({currentInput: "", pastInput: newPastInput});
    }else{
      this.setState({currentInput: currentInput});
    }
  },

  render: function() {
    return (
      <SpeedTyper
        words={this.props.words}
        startTime={this.props.startTime}
        currentInput={this.state.currentInput}
        pastInput={this.state.pastInput}
        onUserInput={this.handleUserInput}
      />
    );
  }
});

export { SpeedTyperContainer as default };
