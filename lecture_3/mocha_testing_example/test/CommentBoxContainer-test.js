'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBoxContainer from '../components/CommentBoxContainer';

describe('CommentBoxContainer', () => {
  var buildCommentBoxContainer = (() => {
    return TestUtils.renderIntoDocument(
      <CommentBoxContainer />
    );
  });

  it('loads the initial comments from the server', () => {
    let commentBoxContainer = buildCommentBoxContainer();

    let comments = commentBoxContainer.state.comments;
    expect(comments).to.have.lengthOf(1);
    expect(comments[0]).to.have.property('author', 'Sukram');
    expect(comments[0]).to.have.property('text', 'This is niss thing');
  });

  it('renders commentBox component', () => {
    let commentBoxContainer = buildCommentBoxContainer();
    let commentBox = TestUtils.findRenderedDOMComponentWithClass(commentBoxContainer, "commentBox")

    expect(commentBox).to.exist;
  });

  context('when new comment is submitted', () => {
    it('adds new comment to state', () => {
      let commentBoxContainer = buildCommentBoxContainer();
      let comment = {text: "Some text", author: "Sukram"}
      commentBoxContainer.handleCommentSubmit(comment);

      let comments = commentBoxContainer.state.comments;
      expect(comments).to.have.lengthOf(2)
      expect(comments[1]).to.have.property('author', 'Sukram');
      expect(comments[1]).to.have.property('text', 'Some text');
    });
  });
});

