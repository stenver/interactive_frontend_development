import React from "react";
import KeyPressListener from './KeyPressListener'

const GlobalKeys = (props) => {
  return (
    <div>
      <div>{props.keys}</div>
      <KeyPressListener handleKeyPress={props.handleKeyPress} />
    </div>
  )
}

export default GlobalKeys;
