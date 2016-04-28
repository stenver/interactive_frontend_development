import React from "react";
import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import R from 'ramda'

// A reusable component which wraps a component with a header.
// Defined as a half-curried function.
const HeaderWrapper = (header, componentClass) => (props) => {
  const innerComponent = React.createElement(componentClass, props)
  return (
    <div>
      <h2>{header}</h2>
      {innerComponent}
    </div>
  )
}

const RemoteComments = HeaderWrapper('Remote comments', CommentList)

const mapStateToProps = (state) => {
  return {
    comments: state.remote.comments
  }
}

export default connect(mapStateToProps)(RemoteComments)
