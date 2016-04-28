import React from 'react';

const Letter = (props) => {
  return(
    <div className={"letter " + props.color}>{props.letter}</div>
  );
};
Letter.propTypes = {
  color: React.PropTypes.string.isRequired,
  letter: React.PropTypes.string.isRequired
};

export { Letter as default };
