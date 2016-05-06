import React from 'react';
import R from 'ramda'
import Word from "../../components/Word";

const CurrentWord = ({currentInput, letters}) => {
  return <Word
    isCurrentInput={true}
    currentInput={currentInput}
    color={"none"}
    letters={letters}
    key={letters}
  />
}

const CurrentWords = ({currentInput, currentRequiredWords}) => {
  const createCurrentWord = (letters, index) => <CurrentWord currentInput={currentInput} letters={letters} key={index} />
  const currentWords = R.addIndex(R.map)(createCurrentWord)(currentRequiredWords)

  return (
    <span id="currentWords">
      {currentWords}
    </span>
  )
}

export default CurrentWords
