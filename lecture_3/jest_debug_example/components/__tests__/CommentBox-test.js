'use strict';

jest.unmock('../CommentBox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';
import CommentForm from '../CommentForm';

describe('CommentBox', () => {
  var buildCommentBox = ((data, onCommentSubmit) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <CommentBox data={data} onCommentSubmit={onCommentSubmit} />
    );
    let renderedTree = renderer.getRenderOutput();

    return renderedTree;
  });

  it('creates Comments heading', () => {
    let commentBox = buildCommentBox([{"id": 1, "author": "wat", "text": "wut"}], ()=>{});
    let commentHeading = commentBox.props.children[0];

    expect(commentHeading.type).toBe('h1');
    expect(commentHeading.props.children).toEqual('Comments');
  });

  it('creates CommentList', () => {
    let data = [{"id": 1}];
    let commentBox = buildCommentBox(data, ()=>{});
    let commentHeading = commentBox.props.children[1];

    expect(commentHeading.type).toBe(CommentList);
    expect(commentHeading.props).toEqual({"data": data});
  });

  it('creates CommentForm', () => {
    let onCommentSubmit = () => {};
    let commentBox = buildCommentBox([{"id": 1}], onCommentSubmit);
    let commentHeading = commentBox.props.children[2];

    expect(commentHeading.type).toBe(CommentForm);
    expect(commentHeading.props).toEqual({"onCommentSubmit": onCommentSubmit});
  });
});

