import React from "react";
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import CommentListWithFilter from './components/CommentListWithFilter'
import AppWrapper from './components/AppWrapper'
import CommentForm from "./containers/CommentForm";
import RemoteComments from "./containers/RemoteComments";

export default (_) => {
  return(
    <Router history={browserHistory}>
      <Route path="/" component={AppWrapper}>
        <IndexRoute component={CommentListWithFilter} />
        <Route path="/comments" component={CommentListWithFilter} />
        <Route path="/addComment" component={CommentForm} />
        <Route path="/remoteComments" component={RemoteComments} />
      </Route>
    </Router>
  )
}
