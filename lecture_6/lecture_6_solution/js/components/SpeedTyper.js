import React from "react";
import WordsContainer from "../containers/WordsContainer";
import TypingContainer from "../containers/TypingContainer";
import StatsContainer from "../containers/StatsContainer";
import StartButtonContainer from "../containers/StartButtonContainer";
import RemoteContainer from "../containers/RemoteContainer";

const SpeedTyper = (props) => {
  return (
    <div className="SpeedTyper">
      <div className="wordsbox">
        <StatsContainer />
        <WordsContainer />
        <TypingContainer />
        <RemoteContainer />
      </div>
    </div>
  );
};

export { SpeedTyper as default };
