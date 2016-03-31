'use strict';

jest.unmock('../CommentBoxContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBoxContainer from '../CommentBoxContainer';
import CommentBox from '../CommentBox';

describe('CommentBoxContainer', () => {
  var buildCommentBoxContainer = (() => {
    return TestUtils.renderIntoDocument(
      <CommentBoxContainer />
    );
  });

  it('creates the input nodes', () => {
    let commentBoxContainer = buildCommentBoxContainer();
	debugger
    var commentBox = TestUtils.findRenderedDOMComponentWithTag(commentBoxContainer, CommentBox);
	commentBoxContainer.state.data = "Some data"
	debugger

    expect(commentBox.props).toEqual({
		data: "Some data",
		onCommentSubmit: commentBoxContainer.handleCommentSubmit
	});
  });
});

