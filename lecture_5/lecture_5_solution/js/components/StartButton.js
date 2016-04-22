import React from "react";

const StartButton = (props) => {
  if (props.isStarted) {
    return(<button onClick={props.onEndClick} >End game</button>);
  }else{
    return(<button onClick={props.onStartClick} >Start game</button>);
  }
};

StartButton.propTypes = {
  onStartClick: React.PropTypes.func.isRequired,
  onEndClick: React.PropTypes.func.isRequired,
  isStarted: React.PropTypes.bool.isRequired
};

export default StartButton;
