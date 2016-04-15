import React from "react";

const Stats = (props) => {
  return (
    <div className="StatsContainer">
      <div className="StatDiv">Word per minute: </div>
      <div className="StatDiv">{props.wordsPerMinute}</div>
      <div className="StatDiv">Accuracy: </div>
      <div className="StatDiv">{props.accuracy}%</div>
    </div>
  );
};
Stats.propTypes = {
  wordsPerMinute: React.PropTypes.string.isRequired,
  accuracy: React.PropTypes.string.isRequired,
}

export { Stats as default }
