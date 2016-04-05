import React from 'react';

const Words = (props) => {
  return(
    <div className="words-outer">
      <div className="words">
        {props.children}
      </div>
    </div>
  );
};
Words.propTypes = {
  children: React.PropTypes.node.isRequired
}

export { Words as default };
