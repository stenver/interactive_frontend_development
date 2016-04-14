import React from "react";
import Stats from "../components/Stats";
import { connect } from 'react-redux'
import { calculateAccuaracy, calculateWordsPerMinute } from '../reducers';

const mapStateToProps = (state) => {
  return {
    accuaracy: calculateAccuaracy(state),
    wordsPerMinute: calculateWordsPerMinute(state)
  }
};

export default connect(mapStateToProps)(Stats);
