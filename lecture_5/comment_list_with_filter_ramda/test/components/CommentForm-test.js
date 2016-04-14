'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentForm from '../../components/CommentForm';
import {renderWithWrapperAndFind} from '../Wrapper';

const defaultProps = {
  author: "",
  text: "",
  handleAuthorChange: sinon.stub(),
  handleTextChange: sinon.stub(),
  handleSubmit: sinon.stub()
}

describe('commentForm', () => {
  var buildCommentForm = ((props) => {
    const allProps = Object.assign({}, defaultProps, props );
    return renderWithWrapperAndFind(React.createElement(CommentForm, allProps), "commentForm");
  });

  it('creates the input nodes', () => {
    let commentForm = buildCommentForm();
    var inputs = commentForm.children
    let nameInput = inputs[0];
    let textInput = inputs[1];
    let submitButton = inputs[2];

    expect(nameInput.tagName).to.equal("INPUT");
    expect(nameInput.type).to.equal("text");

    expect(textInput.tagName).to.equal("INPUT");
    expect(textInput.type).to.equal("text");

    expect(submitButton.tagName).to.equal("INPUT");
    expect(submitButton.type).to.equal("submit");
  });

  it('calls handleAuthorChange when name changes', () => {
    let handleAuthorChange = sinon.stub()
    let commentForm = buildCommentForm({handleAuthorChange});
    var nameInput = commentForm.children[0]

    nameInput.value = "New name"
    TestUtils.Simulate.change(nameInput);
    expect(handleAuthorChange).to.have.been.calledWith("New name")
  });

  it('calls handleTextChange when text changes', () => {
    let handleTextChange = sinon.stub()
    let commentForm = buildCommentForm({handleTextChange});
    var textInput = commentForm.children[1]

    textInput.value = "New text"
    TestUtils.Simulate.change(textInput);

    expect(handleTextChange).to.have.been.calledWith("New text")
  });

  it('calls handleSubmit when form submitted', () => {
    let handleSubmit = sinon.stub()

    let commentForm = buildCommentForm({handleSubmit, author: "A", text: "T"});
    TestUtils.Simulate.submit(commentForm);

    expect(handleSubmit).to.have.been.calledWith("A", "T");
  });
});

