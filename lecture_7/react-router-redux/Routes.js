import React from "react";
import { Router, Route, IndexRoute } from 'react-router';
import CommentListWithFilter from './components/CommentListWithFilter'
import AppWrapper from './components/AppWrapper'
import CommentForm from "./containers/CommentForm";
import RemoteComments from "./containers/RemoteComments";

export default (history) => (_) => {
  return(
    <Router history={history}>
      <Route path="/" component={AppWrapper}>
        <IndexRoute component={CommentListWithFilter} />
        <Route path="/comments" component={CommentListWithFilter} />
        <Route path="/addComment" component={CommentForm} />
        <Route path="/remoteComments" component={RemoteComments} />
      </Route>
    </Router>
  )
}
