import React from "react";
import Stats from "../components/Stats";
import { connect } from 'react-redux'
import { calculateAccuracy, calculateWordsPerMinute } from '../reducers';

const mapStateToProps = (state) => {
  return {
    accuaracy: calculateAccuracy(state),
    wordsPerMinute: calculateWordsPerMinute(state)
  }
};

export default connect(mapStateToProps)(Stats);
