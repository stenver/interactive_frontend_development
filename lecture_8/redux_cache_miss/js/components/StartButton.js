import React from "react";

const StartButton = (props) => {
  if (props.isStarted) {
    return(<button id="endGame" onClick={props.onEndClick} >End game</button>);
  }else{
    return(<button id="startGame" onClick={props.onStartClick} >Start game</button>);
  }
};

StartButton.propTypes = {
  onStartClick: React.PropTypes.func.isRequired,
  onEndClick: React.PropTypes.func.isRequired,
  isStarted: React.PropTypes.bool.isRequired
};

export default StartButton;
