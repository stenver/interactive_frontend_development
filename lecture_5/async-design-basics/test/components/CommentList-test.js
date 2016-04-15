'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentList from '../../components/CommentList';
import Comment from '../../components/Comment';

describe('CommentList', () => {
  var buildCommentList = ((comments) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <CommentList comments={comments}/>
    );
    let renderedTree = renderer.getRenderOutput();

    return renderedTree;
  });

  it('creates comments', () => {
    let comments = [
      {id: 1, "author": "a", "text": "a-text"},
      {id: 2, "author": "b", "text": "b-text"}
    ]
    let commentList = buildCommentList(comments, ()=>{});
    expect(commentList.props.children.length).to.eq(2)

    let first_comment = commentList.props.children[0];
    expect(first_comment.type).to.eq(Comment);
    expect(first_comment.key).to.eq('1');
    expect(first_comment.props).to.eql({"author": "a", "children": "a-text"});

    let second_comment = commentList.props.children[1];
    expect(second_comment.type).to.eq(Comment);
    expect(second_comment.key).to.eq('2');
    expect(second_comment.props).to.eql({"author": "b", "children": "b-text"});
  });
});

