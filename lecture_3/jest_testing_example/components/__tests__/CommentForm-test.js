'use strict';

jest.unmock('../CommentForm');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentForm from '../CommentForm';

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

    expect(nameInput.tagName).toEqual("INPUT");
    expect(nameInput.type).toEqual("text");

    expect(textInput.tagName).toEqual("INPUT");
    expect(textInput.type).toEqual("text");

    expect(submitButton.tagName).toEqual("INPUT");
    expect(submitButton.type).toEqual("submit");
  });

  it('changes the state if name input changes', () => {
    let commentForm = buildCommentForm(()=>{});
    var nameInput = TestUtils.scryRenderedDOMComponentsWithTag(commentForm, 'input')[0];

    nameInput.value = "Some new name"
    TestUtils.Simulate.change(nameInput); // Simulate change event

    expect(commentForm.state.author).toEqual("Some new name");
  });

  it('changes the state if text input changes', () => {
    let commentForm = buildCommentForm(()=>{});
    var textInput = TestUtils.scryRenderedDOMComponentsWithTag(commentForm, 'input')[1];

    textInput.value = "Some new text"
    TestUtils.Simulate.change(textInput); // Simulate change event

    expect(commentForm.state.text).toEqual("Some new text");
  });

  it('clears state if submit is pressed', () => {
    let onCommentSubmit = () => {};
    let commentForm = buildCommentForm(onCommentSubmit);

    commentForm.state.author = "Some author";
    commentForm.state.text = "Some text";

    var form = TestUtils.findRenderedDOMComponentWithTag(commentForm, 'form');
    TestUtils.Simulate.submit(form);

    expect(commentForm.state.author).toEqual("");
    expect(commentForm.state.text).toEqual("");
  });

  it('calls onCommentSubmit if submit is pressed', () => {
    let onCommentSubmit = jest.genMockFunction();
    let commentForm = buildCommentForm(onCommentSubmit);

    commentForm.state.author = "Some author";
    commentForm.state.text = "Some text";

    var form = TestUtils.findRenderedDOMComponentWithTag(commentForm, 'form');
    TestUtils.Simulate.submit(form);

    expect(onCommentSubmit.mock.calls[0][0]).toEqual({
      author: 'Some author',
      text: 'Some text'
    });
  });
});

