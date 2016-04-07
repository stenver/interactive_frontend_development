import React from "react";
import Stats from "./Stats";

var StatsContainer = React.createClass({
  propTypes: {
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    pastInput: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    startTime: React.PropTypes.number.isRequired,
  },

  getInitialState: function() {
    return {
      wordsPerMinute: 0,
      accuaracy: 100,
    }
  },

  calculateAccuaracy: function() {
    let pastWordsForComparing = this.props.words.slice(0, this.props.pastInput.length);
    let matchingWords = 0;
    var that = this;
    pastWordsForComparing.forEach(function(element, index){
      if (that.props.pastInput[index] == element){
        matchingWords += 1;
      }
    });
    return (matchingWords / this.props.pastInput.length * 100).toFixed(0);
  },

  calculateWordsPerMinute: function() {
    let now = Math.floor(Date.now() / 1000)
    let minutesPassed = (now - this.props.startTime) / 60;
    return (this.props.pastInput.length / minutesPassed).toFixed(2);
  },

  render: function() {
    return (
      <Stats
        wordsPerMinute={this.calculateWordsPerMinute()}
        accuaracy={this.calculateAccuaracy()}
      />
    );
  }
});


export { StatsContainer as default };
