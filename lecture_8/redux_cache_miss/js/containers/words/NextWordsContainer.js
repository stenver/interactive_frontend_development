import R from 'ramda'
import { connect } from 'react-redux'
import NextWords from "../../components/words/NextWords"

const mapStateToProps = (state) => {
  const pastInput = state.currentGame.pastInput
  const words = state.currentGame.words
  const nextRequiredWords = R.drop(pastInput.length + 1)(words)

  return { nextRequiredWords }
}

export default connect(mapStateToProps)(NextWords)
