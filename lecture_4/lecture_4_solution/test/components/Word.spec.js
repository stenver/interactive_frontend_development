'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Word from '../../js/components/Word';

describe('Word', () => {
   it('sets the correct classname', () => {
    let letters = "abc";
    let currentInput = "some_input";
    let isCurrentInput = false;
    let color = "green";

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Word letters={letters} isCurrentInput={isCurrentInput} color={color} currentInput={currentInput} />
    );
    let renderedWord = renderer.getRenderOutput();

    expect(renderedWord.props.className).to.eq("word green")
  });

  it('renders letters as string if not current input', () => {
    let letters = "abc";
    let currentInput = "some_input";
    let isCurrentInput = false;
    let color = "none";

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Word letters={letters} isCurrentInput={isCurrentInput} color={color} currentInput={currentInput} />
    );
    let renderedWord = renderer.getRenderOutput();

    expect(renderedWord.props.className).to.eq("word none")
    expect(renderedWord.props.children).to.eq("abc")
  });

  it('renders letter components with correct colors depending on input', () => {
    let letters = "abc";
    let currentInput = "ac";
    let isCurrentInput = true;
    let color = "none";

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Word letters={letters} isCurrentInput={isCurrentInput} color={color} currentInput={currentInput} />
    );
    let renderedWord = renderer.getRenderOutput();

    let renderedLetters = renderedWord.props.children;

    let correctLetter = renderedLetters[0]
    expect(correctLetter.props).to.deep.eq({color: "green", letter: "a"});
    expect(correctLetter.key).to.eq("0");

    let incorrectLetter = renderedLetters[1]
    expect(incorrectLetter.props).to.deep.eq({color: "red", letter: "b"});
    expect(incorrectLetter.key).to.eq("1");

    let untypedLetter = renderedLetters[2]
    expect(untypedLetter.props).to.deep.eq({color: "none", letter: "c"});
    expect(untypedLetter.key).to.eq("2");
  });
});
