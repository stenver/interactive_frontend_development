import React from "react";

const Typing = (props) => {
  const handleUserInput = (event) => props.onUserInput(event.target.value);

  return(
    <input
      className="typing-container"
      value={props.currentInput}
      onChange={handleUserInput}
    / >
  );
};

Typing.propTypes = {
  onUserInput: React.PropTypes.func.isRequired,
  currentInput: React.PropTypes.string.isRequired,
};

export default Typing;
