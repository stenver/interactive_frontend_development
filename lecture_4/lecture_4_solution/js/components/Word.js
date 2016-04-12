import React from "react";

const Word = (props) => {
  return(
    <div className={"word "+ props.color} >{props.children}</div>
  );
};
Word.propTypes = {
  color: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
};

export { Word as default };
