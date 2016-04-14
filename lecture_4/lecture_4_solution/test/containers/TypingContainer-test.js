'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TypingContainer from "../../js/containers/TypingContainer";

describe('TypingContainer', () => {
  var buildTypingContainer = ((onUserInput, currentInput) => {
	return TestUtils.renderIntoDocument(
	  <TypingContainer onUserInput={onUserInput} currentInput={currentInput} />
	);
  });

  it('calculates calls onUserInput prop on change', () => {
	let onUserInput = sinon.stub;
	let typingContainer = buildTypingContainer(onUserInput, "hello");
	let textInput = TestUtils.findRenderedDOMComponentWithTag(typingContainer, 'input');
	TestUtils.Simulate.change(textInput);

	expect(onUserInput.mock.calls[0][0]).to.eq("hello");
    expect(onCommentSubmit).to.have.been.calledWith(hello);
  });
});
