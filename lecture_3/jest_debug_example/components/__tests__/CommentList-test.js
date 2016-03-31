'use strict';

jest.unmock('../CommentList');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentList from '../CommentList';
import Comment from '../Comment';

describe('CommentList', () => {
  var buildCommentList = ((data) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <CommentList data={data}/>
    );
    let renderedTree = renderer.getRenderOutput();

    return renderedTree;
  });

  it('creates the correct comments', () => {
    let data = [
      {id: 1, "author": "a", "text": "a-text"},
      {id: 2, "author": "b", "text": "b-text"}
    ]
    let commentList = buildCommentList(data, ()=>{});
    expect(commentList.props.children.length).toEqual(2)

    let first_comment = commentList.props.children[0];
    expect(first_comment.type).toBe(Comment);
    expect(first_comment.key).toEqual('1');
    expect(first_comment.props).toEqual({"author": "a", "children": "a-text"});

    let second_comment = commentList.props.children[1];
    expect(second_comment.type).toBe(Comment);
    expect(second_comment.key).toEqual('2');
    expect(second_comment.props).toEqual({"author": "b", "children": "b-text"});
  });
});

