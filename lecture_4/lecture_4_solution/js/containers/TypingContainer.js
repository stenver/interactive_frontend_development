import React from "react";
import Typing from '../components/Typing';
import { setCurrentInput } from '../actions';
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    currentInput: state.currentInput
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserInput: (currentInput) => dispatch(setCurrentInput(currentInput))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Typing);
