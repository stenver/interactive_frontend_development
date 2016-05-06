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
    accuracy: calculateAccuracy(state.currentGame),
    wordsPerMinute: calculateWordsPerMinute(state.currentGame, ownProps.currentTime),
    timeElapsed: calculateTimeElapsed(state.currentGame.startTime, ownProps.currentTime),
    highestWordsPerMinute: calculateHighestWordsPerMinute(state.pastGames)
  }
};

const StatsContainer = connect(mapStateToProps)(Stats);

const TickingStatsContainer = (_) => {
  return React.createElement(TickingContainer, {component: StatsContainer})
}

export default TickingStatsContainer;
