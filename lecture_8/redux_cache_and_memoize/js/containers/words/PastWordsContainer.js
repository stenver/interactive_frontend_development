import R from 'ramda'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import PastWords from '../../components/words/PastWords'

const getPastInput = R.path(['currentGame', 'pastInput'])
const getWords = R.path(['currentGame', 'words'])

const mapStateToProps = createSelector(
  [ getPastInput, getWords ],
  (pastInput, words) => {
    const pastRequiredWords = words.slice(0, pastInput.length)

    return { pastInput, pastRequiredWords }
  }
)

export default connect(mapStateToProps)(PastWords)
