import React from 'react';
import Words from "../components/Words";
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    words: state.words,
    currentInput: state.currentInput,
    pastInput: state.pastInput
  }
}

export default connect(mapStateToProps)(Words);
