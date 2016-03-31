import React from "react";
import ReactDOM from "react-dom";

const Comment = (props) => {
  return (
    <div className="comment">
      <h2 className="commentAuthor">
        {props.author}
      </h2>
      {props.children}
    </div>
  );
};
Comment.propTypes = {
  author: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};
export { Comment as default };
