import React from 'react';
import Word from "../components/Word";

const Words = (props) => {
  const buildWords = () => {
    return props.words.map((letters, index) => {
      let color = "none";
      if (index < props.pastInput.length) {
        color = (props.pastInput[index] === letters ? "green" : "red" )
      }
      return <Word
          isCurrentInput={index === props.pastInput.length}
          currentInput={props.currentInput}
          color={color}
          letters={letters}
          key={letters}
        />
    });
  };

  return(
    <div className="words-outer">
      <div className="words">
        {buildWords()}
      </div>
    </div>
  );
};
Words.propTypes = {
  words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  currentInput: React.PropTypes.string.isRequired,
  pastInput: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
}

export { Words as default };
