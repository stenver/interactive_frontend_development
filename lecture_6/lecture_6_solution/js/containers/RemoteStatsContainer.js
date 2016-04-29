import React from "react";
import Stats from "../components/Stats";
import { connect } from 'react-redux'
import {
  calculateAccuracy,
  calculateWordsPerMinute,
  calculateTimeElapsed,
  calculateHighestWordsPerMinute
} from '../reducers';
import TickingContainer from './TickingContainer'

const mapStateToProps = (state, ownProps) => {
  return {
    accuracy: calculateAccuracy(state.remote.currentGame),
    wordsPerMinute: calculateWordsPerMinute(state.remote.currentGame, ownProps.currentTime),
    timeElapsed: calculateTimeElapsed(state.remote.currentGame.startTime, ownProps.currentTime),
    highestWordsPerMinute: calculateHighestWordsPerMinute(state.remote.pastGames)
  }
};

const RemoteStatsContainer = connect(mapStateToProps)(Stats);

const TickingRemoteStatsContainer = (_) => {
  return React.createElement(TickingContainer, {component: RemoteStatsContainer})
}

export default TickingRemoteStatsContainer;
