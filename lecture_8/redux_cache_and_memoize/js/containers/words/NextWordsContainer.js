import R from 'ramda'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import NextWords from "../../components/words/NextWords"

const getPastInput = R.path(['currentGame', 'pastInput'])
const getWords = R.path(['currentGame', 'words'])

const mapStateToProps = createSelector(
  [ getPastInput, getWords ],
  (pastInput, words) => {
    const nextRequiredWords = R.drop(pastInput.length + 1)(words)

    return { nextRequiredWords }
  }
)

export default connect(mapStateToProps)(NextWords)
