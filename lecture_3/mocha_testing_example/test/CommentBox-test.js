'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBox from '../components/CommentBox';
import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

describe('CommentBox', () => {
  var buildCommentBox = ((comments, onCommentSubmit) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <CommentBox comments={comments} onCommentSubmit={onCommentSubmit} />
    );
    let renderedTree = renderer.getRenderOutput();

    return renderedTree;
  });

  it('creates Comments heading', () => {
    let commentBox = buildCommentBox([{"id": 1, "author": "wat", "text": "wut"}], ()=>{});
    let commentHeading = commentBox.props.children[0];

    expect(commentHeading.type).to.eq('h1');
    expect(commentHeading.props.children).to.eq('Comments');
  });

  it('creates CommentList', () => {
    let comments = [{"id": 1}];
    let commentBox = buildCommentBox(comments, ()=>{});
    let commentHeading = commentBox.props.children[1];

    expect(commentHeading.type).to.eq(CommentList);
    expect(commentHeading.props).to.eql({"comments": comments});
  });

  it('creates CommentForm', () => {
    let onCommentSubmit = () => {};
    let commentBox = buildCommentBox([{"id": 1}], onCommentSubmit);
    let commentHeading = commentBox.props.children[2];

    expect(commentHeading.type).to.eq(CommentForm);
    expect(commentHeading.props).to.eql({"onCommentSubmit": onCommentSubmit});
  });
});

