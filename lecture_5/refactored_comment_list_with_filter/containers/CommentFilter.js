import CommentFilter from "../components/CommentFilter";
import { connect } from 'react-redux'
import { setAuthorFilter } from '../actions'

const isFirstOfThisValue = (value, index, self) => {
  return self.indexOf(value) === index;
}

const mapStateToProps = (state) => {
  const authors = state.form.comments
    .map((comment) => comment.author)
    .filter(isFirstOfThisValue) // unique values

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
