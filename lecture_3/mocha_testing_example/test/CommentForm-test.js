'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentForm from '../components/CommentForm';

describe('commentForm', () => {
  var buildCommentForm = ((onCommentSubmit) => {
    return TestUtils.renderIntoDocument(
      <CommentForm onCommentSubmit={onCommentSubmit} />
    );
  });

  it('creates the input nodes', () => {
    let commentForm = buildCommentForm(()=>{});
    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(commentForm, 'input');
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

  it('changes the state if name input changes', () => {
    let commentForm = buildCommentForm(()=>{});
    var nameInput = TestUtils.scryRenderedDOMComponentsWithTag(commentForm, 'input')[0];

    nameInput.value = "Some new name"
    TestUtils.Simulate.change(nameInput); // Simulate change event

    expect(commentForm.state.author).to.equal("Some new name");
  });

  it('changes the state if text input changes', () => {
    let commentForm = buildCommentForm(()=>{});
    var textInput = TestUtils.scryRenderedDOMComponentsWithTag(commentForm, 'input')[1];

    textInput.value = "Some new text"
    TestUtils.Simulate.change(textInput); // Simulate change event

    expect(commentForm.state.text).to.equal("Some new text");
  });

  it('clears state if submit is pressed', () => {
    let onCommentSubmit = () => {};
    let commentForm = buildCommentForm(onCommentSubmit);

    commentForm.state.author = "Some author";
    commentForm.state.text = "Some text";

    var form = TestUtils.findRenderedDOMComponentWithTag(commentForm, 'form');
    TestUtils.Simulate.submit(form);

    expect(commentForm.state.author).to.equal("");
    expect(commentForm.state.text).to.equal("");
  });

  it('calls onCommentSubmit if submit is pressed', () => {
    let onCommentSubmit = sinon.stub();
    let commentForm = buildCommentForm(onCommentSubmit);

    commentForm.state.author = "Some author";
    commentForm.state.text = "Some text";

    var form = TestUtils.findRenderedDOMComponentWithTag(commentForm, 'form');
    TestUtils.Simulate.submit(form);

    expect(onCommentSubmit).to.have.been.calledWith({
      author: 'Some author',
      text: 'Some text'
    });
  });
});

