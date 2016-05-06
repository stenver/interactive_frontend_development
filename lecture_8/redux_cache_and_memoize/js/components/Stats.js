import React from "react";

const Stats = (props) => {
  let HighestWordsPerMinuteElement;
  if ((props.highestWordsPerMinute !== null)) {
    HighestWordsPerMinuteElement = (
      <div>
        <div className="StatDiv">Highest words per minute</div>
        <div className="StatDiv">{props.highestWordsPerMinute}</div>
      </div>
    )
  } else {
    HighestWordsPerMinuteElement = <span />
  }

  return (
    <div className="StatsContainer">
      <div className="StatDiv">Word per minute: </div>
      <div className="StatDiv">{props.wordsPerMinute}</div>
      <div className="StatDiv">Accuracy: </div>
      <div className="StatDiv">{props.accuracy}%</div>
      <div className="StatDiv">Time elapsed: </div>
      <div className="StatDiv">{props.timeElapsed} seconds</div>
      { HighestWordsPerMinuteElement }
    </div>
  );
};
Stats.propTypes = {
  wordsPerMinute: React.PropTypes.string.isRequired,
  accuracy: React.PropTypes.string.isRequired,
  timeElapsed: React.PropTypes.string.isRequired,
  highestWordsPerMinute: React.PropTypes.string
}

export { Stats as default }
