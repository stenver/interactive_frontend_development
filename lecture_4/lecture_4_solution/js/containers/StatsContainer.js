import React from "react";
import Stats from "../components/Stats";
import { connect } from 'react-redux'

const mapStateToProps = (props) => {

  const calculateAccuaracy = () => {
    const pastWordsForComparing = props.words.slice(0, props.pastInput.length);
    let matchingWords = 0;
    pastWordsForComparing.forEach(function(element, index){
      if (props.pastInput[index] == element){
        matchingWords += 1;
      }
    });
    return (matchingWords / props.pastInput.length * 100).toFixed(0);
  };

  const calculateWordsPerMinute = () => {
    let now = Math.floor(Date.now() / 1000)
    let minutesPassed = (now - props.startTime) / 60;
    return (props.pastInput.length / minutesPassed).toFixed(2);
  };

  return {
    accuaracy: calculateAccuaracy(),
    wordsPerMinute: calculateWordsPerMinute()
  }
}

export default connect(mapStateToProps)(Stats);
