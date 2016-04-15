'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Typing from '../../js/components/Typing';

describe('Typing', () => {

  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildTypingContainer = ((onUserInput, currentInput) => {
	return TestUtils.renderIntoDocument(
	  <Wrapper>
        <Typing onUserInput={onUserInput} currentInput={currentInput} />
      </Wrapper>
	);
  });

  it('sets the input field value', () => {
	let onUserInput = sinon.stub;
	let typing = buildTypingContainer(onUserInput, "hello");
	let textInput = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');
	expect(textInput.value).to.eq("hello");
  });

  it('calls onUserInput prop on change', () => {
	let onUserInput = sinon.stub();
	let typing = buildTypingContainer(onUserInput, "hello");
	let textInput = TestUtils.findRenderedDOMComponentWithTag(typing, 'input');

	TestUtils.Simulate.change(textInput);

    expect(onUserInput).to.have.been.calledWith("hello");
  });
});
