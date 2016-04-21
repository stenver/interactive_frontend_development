import React from "react";
import ReactDOM from "react-dom";

const Fetcher = ({onFetch, inProgress, onCancel}) => {
  let text;

  if (inProgress) {
    text = 'Request in flight...'
  } else {
    text = 'Click here to fetch additional comment';
  }

  let buttonDisabled = inProgress;

  let cancelButton = null;
  if (inProgress) {
    cancelButton = <button onClick={onCancel} className="cancel">Cancel request</button>
  }

  return (
    <div className="fetcher">
      <button onClick={onFetch} disabled={buttonDisabled}>{text}</button>
      {cancelButton}
    </div>
  );
};
Fetcher.propTypes = {
  onFetch: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  inProgress: React.PropTypes.bool.isRequired,
};
export { Fetcher as default };
