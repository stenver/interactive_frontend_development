import { connect } from 'react-redux'
import CommentList from '../components/CommentList'
import R from 'ramda'

const mapStateToProps = (state) => {

  const filteredComments = R.ifElse(
    R.always(state.filter.author),
    R.filter(R.propEq('author', state.filter.author)),
    R.identity
  )(state.form.comments)

  return {
    comments: filteredComments
  }
}

export default connect(mapStateToProps)(CommentList)
