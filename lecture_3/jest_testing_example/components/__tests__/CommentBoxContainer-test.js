'use strict';

jest.unmock('../CommentBoxContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBoxContainer from '../CommentBoxContainer';
import CommentBox from '../CommentBox';

// Pure functions need to be mocked to return some DOM
CommentBox.mockImplementation((props) => <div></div>)

describe('CommentBoxContainer', () => {
  var buildCommentBoxContainer = (() => {
    return TestUtils.renderIntoDocument(
      <CommentBoxContainer />
    );
  });

  it('sets the inital state', () => {
    let commentBoxContainer = buildCommentBoxContainer();

    let comments = commentBoxContainer.state.comments;
    expect(comments.length).toEqual(1);
    expect(comments[0].text).toEqual("This is niss thing");
    expect(comments[0].author).toEqual("Sukram");
  });

  it('adds new comment to state when comment is submitted', () => {
    let commentBoxContainer = buildCommentBoxContainer();
    let comment = {text: "Some text", author: "Sukram"}
    commentBoxContainer.handleCommentSubmit(comment);

    let comments = commentBoxContainer.state.comments;
    expect(comments.length).toEqual(2);
    expect(comments[1].text).toEqual("Some text");
    expect(comments[1].author).toEqual("Sukram");
  });
});

