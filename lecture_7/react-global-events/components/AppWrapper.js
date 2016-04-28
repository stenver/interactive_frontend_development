import React from "react";
import { Link } from 'react-router';
import GlobalKeys from '../containers/GlobalKeys'

const LinkToComments = (_) => <Link to="/comments">View comments</Link>
const LinkToAddComment = (_) => <Link to="/addComment">Add comment</Link>
const LinkToRemoteComments = (_) => <Link to="/remoteComments">Remote comments</Link>

export default (props) => {
  return(
    <div className="commentApp">
      <h1>Comments App</h1>
      <div> <LinkToComments/> </div>
      <div> <LinkToAddComment/> </div>
      <div> <LinkToRemoteComments/> </div>
      <GlobalKeys />
      {props.children}
    </div>
  )
}
