import { connect } from 'react-redux'
import GlobalKeys from '../components/GlobalKeys'
import { keyPressed } from '../actions/GlobalKeys'

const mapStateToProps = (state) => {
  return {
    keys: state.global.input
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleKeyPress: (key) => dispatch(keyPressed(key))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GlobalKeys)
