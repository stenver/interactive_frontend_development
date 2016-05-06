'use strict';

import R from 'ramda'
import Rx from 'rx'

const scanString = R.compose(
  R.scan(R.concat, ""),
  R.split("")
)

const createChangeEvent = () => {
  return new Event("input", { bubbles: true});
}

const typeAndChange = (value, element) => {
  const valuesToType = scanString(value)
  R.forEach((value) => {
    element.value = value;
  })(valuesToType)
  element.dispatchEvent(createChangeEvent())
}

const getStartButton = () => document.querySelector("#startGame")
const getEndButton = () => document.querySelector("#endGame")
const getTypingContainer = () => document.querySelector(".typing-container")
const getUntypedLetter = () => document.querySelector(".letter.none")

const typeUntypedCharacter = (typingContainer) => {
  const letterElement = getUntypedLetter()
  let charToType;
  if (letterElement) {
    charToType = letterElement.textContent
  } else {
    charToType = " "
  }
  typingContainer.value += charToType
  typingContainer.dispatchEvent(createChangeEvent())
}

const typeCharacters = (count) => {
  return Rx.Observable.timer(0, 10)
    .take(count)
    .doOnNext(typeUntypedCharacter.bind(null, getTypingContainer()))
}

const playGame = (charCount) => {
  return Rx.Observable.just({})
    .do(() => getStartButton().click() )
    .concat(Rx.Observable.timer(10))
    .concat(typeCharacters(charCount))
    .doOnCompleted( () =>  getEndButton().click() )
}

const mimicUsage = () => {
  console.profile("mimic user")
  Rx.Observable.concat(
    playGame(50),
    playGame(50),
    playGame(50)
  ).subscribeOnCompleted( () => console.profileEnd("mimic user") )
}

export default mimicUsage;
