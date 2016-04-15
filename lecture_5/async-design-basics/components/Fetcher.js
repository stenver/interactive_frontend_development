import React from "react";
import ReactDOM from "react-dom";

const Fetcher = ({onFetch, inProgress}) => {
  let text;

  if (inProgress) {
    text = 'Request in flight...'
  } else {
    text = 'Click here to fetch additional comment';
  }

  let buttonDisabled = inProgress;

  return (
    <div className="fetcher">
      <button onClick={onFetch} disabled={buttonDisabled}>{text}</button>
    </div>
  );
};
Fetcher.propTypes = {
  onFetch: React.PropTypes.func.isRequired
};
export { Fetcher as default };
