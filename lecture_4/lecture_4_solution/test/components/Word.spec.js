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

    let correct_letter = renderedLetters[0]
    expect(correct_letter.props).to.deep.eq({color: "green", children: "a"});
    expect(correct_letter.key).to.eq("0");

    let incorrect_letter = renderedLetters[1]
    expect(incorrect_letter.props).to.deep.eq({color: "red", children: "b"});
    expect(incorrect_letter.key).to.eq("1");

    let untyped_letter = renderedLetters[2]
    expect(untyped_letter.props).to.deep.eq({color: "none", children: "c"});
    expect(untyped_letter.key).to.eq("2");
  });
});
