import React from "react";
import ReactDOM from "react-dom";

const Fetcher = ({onFetch}) => {
  return (
    <div className="fetcher">
      <button onClick={onFetch}>Click here to fetch additional comment</button>
    </div>
  );
};
Fetcher.propTypes = {
  onFetch: React.PropTypes.func.isRequired
};
export { Fetcher as default };
