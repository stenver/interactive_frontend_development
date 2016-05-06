import { connect } from 'react-redux'
import R from 'ramda'
import CurrentWords from "../../components/words/CurrentWords"

const mapStateToProps = (state) => {
  const words = state.currentGame.words
  const pastInput = state.currentGame.pastInput

  const currentRequiredWords = R.compose(
    R.take(1),
    R.drop(pastInput.length)
  )(words)

  return {
    currentInput: state.currentGame.currentInput,
    currentRequiredWords: currentRequiredWords
  }
}

export default connect(mapStateToProps)(CurrentWords)
