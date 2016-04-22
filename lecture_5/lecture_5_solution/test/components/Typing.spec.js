'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Typing from '../../js/components/Typing';
import { wrapAndFindByTag } from '../Wrapper'

describe('Typing', () => {

  var buildTypingContainer = ((onUserInput, currentInput, disabled=false) => {
    return wrapAndFindByTag(
      <Typing onUserInput={onUserInput} currentInput={currentInput} disabled={disabled} />,
      'input'
    );
  });

  it('sets the input field value', () => {
    let textInput = buildTypingContainer(sinon.stub(), "hello");
    expect(textInput.value).to.eq("hello");
  });

  it('calls onUserInput prop on change', () => {
    let onUserInput = sinon.stub();
    let textInput = buildTypingContainer(onUserInput, "hello");

    TestUtils.Simulate.change(textInput);
    expect(onUserInput).to.have.been.calledWith("hello");
  });

  it('makes input disabled when disabled', () => {
    let onUserInput = sinon.stub();
    let textInput = buildTypingContainer(onUserInput, "hello", true);

    expect(textInput.disabled).to.eq(true)
  })
});
