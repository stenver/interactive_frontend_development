import { connect } from 'react-redux'

import CommentList from '../components/CommentList'

const mapStateToProps = (state) => {
  let filteredComments;
  if (!state.filter.author) {
    filteredComments = state.form.comments;
  } else {
    filteredComments = state.form.comments.filter(
      (comment) => comment.author === state.filter.author
    )
  }

  return {
    comments: filteredComments
  }
}

export default connect(mapStateToProps)(CommentList)
