import React from 'react';

const Letter = (props) => {
  return(
    <div className={"letter " + props.color}>{props.children}</div>
  );
};
Letter.propTypes = {
  color: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired
};

export { Letter as default };
