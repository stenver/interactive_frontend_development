import React from "react";
import ReactDOM from "react-dom";
import Fetcher from "../components/Fetcher";
import { connect } from 'react-redux'
import { commentFetchRequested, fetchPost } from '../actions'

const mapStateToProps = (state) => {
  return {
    inProgress: state.fetching.inProgress
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => {
      dispatch(commentFetchRequested())
      dispatch(fetchPost())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Fetcher);
