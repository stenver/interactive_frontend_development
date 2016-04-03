'use strict';

jest.unmock('../CommentBoxContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBoxContainer from '../CommentBoxContainer';
import CommentBox from '../CommentBox';

// Pure functions need to be mocked to return some DOM
// We give it a classname to test that it is rendered
CommentBox.mockImplementation(() => <div />)

describe('CommentBoxContainer', () => {
  var buildCommentBoxContainer = (() => {
    return TestUtils.renderIntoDocument(
      <CommentBoxContainer />
    );
  });

  it('loads the initial comments from the server', () => {
    let commentBoxContainer = buildCommentBoxContainer();

    let comments = commentBoxContainer.state.comments;
    expect(comments.length).toEqual(1);
    expect(comments[0].text).toEqual("This is niss thing");
    expect(comments[0].author).toEqual("Sukram");
  });

  it('renders commentBox component', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<CommentBoxContainer/>)
    let output = renderer.getRenderOutput();

    expect(output.type).toBe(CommentBox);
    expect(output.props.comments).toEqual([])
    expect(output.props.onCommentSubmit).toBeDefined()
  });

  describe('when new comment is submitted', () => {
    it('adds new comment to state', () => {
      let commentBoxContainer = buildCommentBoxContainer();
      let comment = {text: "Some text", author: "Sukram"}
      commentBoxContainer.handleCommentSubmit(comment);

      let comments = commentBoxContainer.state.comments;
      expect(comments.length).toEqual(2);
      expect(comments[1].text).toEqual("Some text");
      expect(comments[1].author).toEqual("Sukram");
    });
  });
});

