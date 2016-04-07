'use strict';

jest.unmock('../TypingContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import TypingContainer from "../TypingContainer";

describe('TypingContainer', () => {
  var buildTypingContainer = ((onUserInput, currentInput) => {
	return TestUtils.renderIntoDocument(
	  <TypingContainer onUserInput={onUserInput} currentInput={currentInput} />
	);
  });

  it('calculates calls onUserInput prop on change', () => {
	let onUserInput = jest.genMockFunction();
	let typingContainer = buildTypingContainer(onUserInput, "hello");
	let textInput = TestUtils.findRenderedDOMComponentWithTag(typingContainer, 'input');
	TestUtils.Simulate.change(textInput);

	console.log(onUserInput.mock);
	console.log(onUserInput.mock.calls);
	expect(onUserInput.mock.calls[0][0]).toEqual("hello");
  });
});
