import R from 'ramda'
import { connect } from 'react-redux'
import PastWords from '../../components/words/PastWords'

const mapStateToProps = (state) => {
  const pastInput = state.currentGame.pastInput
  const words = state.currentGame.words
  const pastRequiredWords = words.slice(0, pastInput.length)

  return { pastInput, pastRequiredWords }
}

export default connect(mapStateToProps)(PastWords)
