import React from "react";
import Stats from "../components/Stats";
import { connect } from 'react-redux'
import {
  calculateAccuracy,
  calculateWordsPerMinute,
  calculateTimeElapsed,
  getCurrentTime
} from '../reducers';

export const StatsContainer = React.createClass({
  updateCounter: function() {
    this.forceUpdate()
  },

  componentDidMount: function(){
    this.interval = setInterval(this.updateCounter, 1000);
  },

  componentWillUnmount: function() {
    clearInterval(this.interval);
  },

  render: function() {
    const timeElapsed = calculateTimeElapsed(this.props, getCurrentTime());
    return (
      <Stats
        accuracy={this.props.accuracy}
        wordsPerMinute={this.props.wordsPerMinute}
        timeElapsed={timeElapsed}
      />
    );
  }
});

const mapStateToProps = (state) => {
  return {
    accuracy: calculateAccuracy(state.currentGame),
    wordsPerMinute: calculateWordsPerMinute(state.currentGame, getCurrentTime()),
    startTime: state.currentGame.startTime
  }
};

export default connect(mapStateToProps)(StatsContainer);
