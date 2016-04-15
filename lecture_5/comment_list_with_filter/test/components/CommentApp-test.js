'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentApp from '../../components/CommentApp';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';
import Filter from '../../components/Filter';

const defaultProps = {
  comments: [],
  author: "",
  text: "",
  handleAuthorChange: sinon.stub(),
  handleTextChange: sinon.stub(),
  handleSubmit: sinon.stub(),
  allAuthors: [],
  handleAuthorFilterChange: sinon.stub(),
  filteredByAuthor: ""
}

describe('CommentApp', () => {
  var buildCommentBox = ((props={}) => {
    let renderer = TestUtils.createRenderer();
    const allProps = Object.assign({}, defaultProps, props)

    renderer.render(React.createElement(CommentApp, allProps));
    let renderedTree = renderer.getRenderOutput();

    return renderedTree;
  });

  it('creates Comments heading', () => {
    let app = buildCommentBox()
    let commentHeading = app.props.children[0];

    expect(commentHeading.type).to.eq('h1');
    expect(commentHeading.props.children).to.eq('Comments');
  });

  it('creates CommentList', () => {
    let comments = [{"id": 1, "author": "wat", "text": "wut"}];
    let app = buildCommentBox({comments});
    let commentList = app.props.children[1];

    expect(commentList.type).to.eq(CommentList);
    expect(commentList.props).to.eql({"comments": comments});
  });

  it('creates CommentForm', () => {
    let handleSubmit = sinon.stub();
    let handleTextChange = sinon.stub();
    let handleAuthorChange = sinon.stub();
    let author = "gagarin";
    let text = "hyperboloid"

    let app = buildCommentBox({handleSubmit, handleTextChange, handleAuthorChange, author, text});
    let commentForm = app.props.children[2];

    expect(commentForm.type).to.eq(CommentForm);
    expect(commentForm.props).to.eql({handleSubmit, handleTextChange, handleAuthorChange, author, text});
  });

  it('creates Filter', () => {
    let allAuthors = ["a1"];
    let filteredByAuthor = "";
    let handleAuthorFilterChange = sinon.stub();

    let app = buildCommentBox({allAuthors, filteredByAuthor, handleAuthorFilterChange});
    let filter = app.props.children[3];

    expect(filter.type).to.eq(Filter);
    expect(filter.props).to.eql({
      authors: allAuthors,
      selectedAuthor: filteredByAuthor,
      onSelectAuthor: handleAuthorFilterChange
    });
  });
});

