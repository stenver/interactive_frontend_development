import CommentFilter from "../components/CommentFilter";
import { connect } from 'react-redux'
import { setAuthorFilter } from '../actions'
import R from 'ramda'

const mapStateToProps = (state) => {
  const authors = R.compose(
    R.uniq,
    R.map(R.prop('author'))
  )(state.form.comments)

  return {
    authors: authors,
    selectedAuthor: state.filter.author
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectAuthor: (author) => dispatch(setAuthorFilter(author))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentFilter)
