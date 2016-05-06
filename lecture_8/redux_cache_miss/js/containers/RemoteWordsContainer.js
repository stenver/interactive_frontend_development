import React from 'react';
import Words from "../components/Words";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    words: state.remote.currentGame.words,
    currentInput: state.remote.currentGame.currentInput,
    pastInput: state.remote.currentGame.pastInput
  }
}

export default connect(mapStateToProps)(Words);
