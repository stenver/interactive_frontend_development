import React from "react";
import WordsContainer from "./WordsContainer";
import TypingContainer from "./TypingContainer";
import StatsContainer from "./StatsContainer";

const SpeedTyper = (props) => {
  return (
    <div className="SpeedTyper">
      <div className="wordsbox">
        <StatsContainer
          words={props.words}
          pastInput={props.pastInput}
          startTime={props.startTime}
        />
        <WordsContainer
          words={props.words}
          currentInput={props.currentInput}
          pastInput={props.pastInput}
        />
        <TypingContainer
          currentInput={props.currentInput}
          onUserInput={props.onUserInput}
        />
      </div>
    </div>
  );
};

SpeedTyper.propTypes = {
  words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  currentInput: React.PropTypes.string.isRequired,
  pastInput: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  startTime: React.PropTypes.number.isRequired,
  onUserInput: React.PropTypes.func.isRequired,
};

export { SpeedTyper as default };
