import React from "react";
import Words from "../components/Words";
import TypingContainer from "../containers/TypingContainer";
import StatsContainer from "../containers/StatsContainer";
import StartButtonContainer from "../containers/StartButtonContainer";
import RemoteContainer from "../containers/RemoteContainer";

const SpeedTyper = (props) => {
  return (
    <div className="SpeedTyper">
      <div className="wordsbox">
        <StatsContainer />
        <Words />
        <TypingContainer />
        <RemoteContainer />
      </div>
    </div>
  );
};

export { SpeedTyper as default };
