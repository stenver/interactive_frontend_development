import R from 'ramda'
import React from 'react';
import Word from "../../components/Word";

const PastWord = ({letters, pastLetters}) => {
  console.count("Render PastWord")

  const color = (pastLetters === letters ? "green" : "red" )
  return <Word
      isCurrentInput={false}
      currentInput={""}
      color={color}
      letters={letters}
    />
}

const PastWords = ({pastInput, pastRequiredWords}) => {
  console.count("Render PastWords")
  const createPastWord = (letters, index) => <PastWord pastLetters={pastInput[index]} letters={letters} key={index} />
  const pastWords = R.addIndex(R.map)(createPastWord)(pastRequiredWords)
  return <span id="pastWords">{pastWords}</span>
}

export default PastWords
