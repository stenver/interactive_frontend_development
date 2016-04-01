import React from 'react';

define(["react", "./Word.js"],
  (React, Word) => {

  const WordsContainer = (props) => {
    return(
      <div className="words-outer">
        <div className="words">
          {props.words.map((word) => { return <Word key={word} word={word} />; })}
        </div>
      </div>
    );
  };
  WordsContainer.propTypes = {
    words: React.PropTypes.array.isRequired
  }
  return WordsContainer;
});

