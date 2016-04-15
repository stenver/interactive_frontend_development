import React from "react";
import ReactDOM from "react-dom";
import Fetcher from "../components/Fetcher";
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

const mapDispatchToProps = (dispatch) => {
  return {
    onFetch: () => dispatch(fetchPost())
  }
};

export default connect(undefined, mapDispatchToProps)(Fetcher);
