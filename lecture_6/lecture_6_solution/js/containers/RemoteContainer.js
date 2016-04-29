import React from 'react';
import Remote from "../components/Remote";
import { connect } from 'react-redux'
import R from 'ramda'

const mapStateToProps = (state) => {
  return {
    opponentPresent: !R.isNil(state.remote.currentGame)
  }
}

export default connect(mapStateToProps)(Remote);
