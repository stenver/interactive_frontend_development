import React from "react";
import Typing from '../components/Typing';
import { setCurrentInput } from '../actions';
import { isStarted } from '../reducers';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    currentInput: state.currentGame.currentInput,
    disabled: !isStarted(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserInput: (currentInput) => dispatch(setCurrentInput(currentInput))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Typing);
