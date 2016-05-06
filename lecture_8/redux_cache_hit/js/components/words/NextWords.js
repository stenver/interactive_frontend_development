import React from 'react';
import R from 'ramda'
import Word from "../../components/Word";

const NextWord = ({letters}) => {
  console.count("Render NextWord")
  return <Word
    isCurrentInput={false}
    currentInput={""}
    color={"none"}
    letters={letters}
  />
}

const NextWords = ({nextRequiredWords}) => {
  console.count("Render NextWords")
  const createNextWord = (letters, index) => {
    return <NextWord letters={letters} key={index} />
  }
  const nextWords = R.addIndex(R.map)(createNextWord)(nextRequiredWords)
  return <span id="nextWords">{nextWords}</span>
}

export default NextWords
