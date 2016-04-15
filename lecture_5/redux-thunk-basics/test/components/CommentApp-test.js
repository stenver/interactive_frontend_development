'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentApp from '../../components/CommentApp';
import FilteredCommentList from '../../containers/FilteredCommentList';
import CommentForm from '../../containers/CommentForm';
import CommentFilter from '../../containers/CommentFilter';
import Fetcher from '../../containers/Fetcher';

describe('CommentApp', () => {
  var buildCommentApp = (() => {
    let renderer = TestUtils.createRenderer();

    renderer.render(<CommentApp />)
    let renderedTree = renderer.getRenderOutput();

    return renderedTree;
  });

  it('creates Comments heading', () => {
    let app = buildCommentApp()
    let commentHeading = app.props.children[0];

    expect(commentHeading.type).to.eq('h1');
    expect(commentHeading.props.children).to.eq('Comments');
  });

  it('creates CommentList', () => {
    let comments = [{"id": 1, "author": "wat", "text": "wut"}];
    let app = buildCommentApp();
    let commentList = app.props.children[1];

    expect(commentList.type).to.eq(FilteredCommentList);
  });

  it('creates CommentForm', () => {
    let app = buildCommentApp();
    let commentForm = app.props.children[2];

    expect(commentForm.type).to.eq(CommentForm);
  });

  it('creates CommentFilter', () => {
    let app = buildCommentApp();
    let filter = app.props.children[3];

    expect(filter.type).to.eq(CommentFilter);
  });

  it('creates Fetcher', () => {
    let app = buildCommentApp();
    let fetcher = app.props.children[4];

    expect(fetcher.type).to.eq(Fetcher);
  });
});

