'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBox from '../../components/CommentBox';
import FilteredCommentList from '../../containers/FilteredCommentList';
import CommentFormContainer from '../../containers/CommentFormContainer';
import FilterContainer from '../../containers/FilterContainer';

describe('CommentBox', () => {
  var buildCommentBox = (() => {
    let renderer = TestUtils.createRenderer();

    renderer.render(<CommentBox />)
    let renderedTree = renderer.getRenderOutput();

    return renderedTree;
  });

  it('creates Comments heading', () => {
    let commentBox = buildCommentBox()
    let commentHeading = commentBox.props.children[0];

    expect(commentHeading.type).to.eq('h1');
    expect(commentHeading.props.children).to.eq('Comments');
  });

  it('creates CommentList', () => {
    let comments = [{"id": 1, "author": "wat", "text": "wut"}];
    let commentBox = buildCommentBox();
    let commentList = commentBox.props.children[1];

    expect(commentList.type).to.eq(FilteredCommentList);
  });

  it('creates CommentForm', () => {
    let commentBox = buildCommentBox();
    let commentForm = commentBox.props.children[2];

    expect(commentForm.type).to.eq(CommentFormContainer);
  });

  it('creates FilterContainer', () => {
    let commentBox = buildCommentBox();
    let filter = commentBox.props.children[3];

    expect(filter.type).to.eq(FilterContainer);
  });
});

