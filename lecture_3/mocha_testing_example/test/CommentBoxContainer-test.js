'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBoxContainer from '../components/CommentBoxContainer';
import CommentBox from '../components/CommentBox';

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

  it('renders CommentBox with comments and onCommentSubmit handler', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<CommentBoxContainer/>)
    let output = renderer.getRenderOutput();

    expect(output.type).to.eq(CommentBox);
    expect(output.props).to.have.property('comments')
      .which.eql([])
    expect(output.props).to.have.property('onCommentSubmit')
      .which.is.a('function')
  });
});

