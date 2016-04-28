import React from "react";
import SpeedTyper from "./SpeedTyper";
import StartButtonContainer from "../containers/StartButtonContainer";
import HighScoreContainer from "../containers/HighScoreContainer";

const Game = (props) => {
  return (
    <div>
      <SpeedTyper />
      <StartButtonContainer />
      <HighScoreContainer />
    </div>
  );
};

export { Game as default };
