'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBoxContainer from '../components/CommentBoxContainer';

describe('CommentBoxContainer', () => {
  var buildCommentBoxContainer = () => {
    return TestUtils.renderIntoDocument(
      <CommentBoxContainer />
    );
  };

  it('Adds one initial comment', () => {
    let container = buildCommentBoxContainer();
    let comments = TestUtils.scryRenderedDOMComponentsWithClass(container, "comment")
    expect(comments.length).to.eq(1)
  });

  context('when new comment is submitted', () => {
    var container = null
    before(() => {
      container = buildCommentBoxContainer();
      container.handleCommentSubmit({author: "me", text: "My text"});
    });

    it('Adds another comment', () => {
      let comments = TestUtils.scryRenderedDOMComponentsWithClass(container, "comment")
      expect(comments.length).to.eq(2)
    });

    it('Adds comment with provided author and text', () => {
      let comments = TestUtils.scryRenderedDOMComponentsWithClass(container, "comment")
      let newComment = comments[1];
      expect(newComment.innerHTML).to.include("me");
      expect(newComment.innerHTML).to.include("My text");
    });
  });

});

