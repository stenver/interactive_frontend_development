import React from "react";
import SpeedTyper from "./SpeedTyper";
import StartButtonContainer from "../containers/StartButtonContainer";
import HighScoreContainer from "../containers/HighScoreContainer";
import profile from "../profile"

const MimicUsage = () => {
  const onClick = () => { setTimeout(profile, 10) }
  return (
    <button onClick={onClick}>Mimic user</button>
  )
}


const Game = (props) => {
  return (
    <div>
      <SpeedTyper />
      <StartButtonContainer />
      <HighScoreContainer />
      <MimicUsage />
    </div>
  );
};

export { Game as default };
