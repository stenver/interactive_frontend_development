import React from "react";
import RemoteWordsContainer from "../containers/RemoteWordsContainer";
import RemoteStatsContainer from "../containers/RemoteStatsContainer";

const Remote = (props) => {
  if (props.opponentPresent) {
    return (
      <div className="remoteContainer">
        <h2>Remote Player</h2>
        <RemoteWordsContainer />
        <RemoteStatsContainer />
      </div>
    );
  } else {
    return <span/>
  }
};
Remote.propTypes = {
  opponentPresent: React.PropTypes.bool.isRequired,
}

export { Remote as default }
