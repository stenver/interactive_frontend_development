import React from 'react';
import Words from "../components/Words";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    words: state.currentGame.words,
    currentInput: state.currentGame.currentInput,
    pastInput: state.currentGame.pastInput
  }
}

export default connect(mapStateToProps)(Words);
