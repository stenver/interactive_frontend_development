'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Words from '../../js/components/Words';

describe('Words', () => {

  it('renders words without color if no input', () => {
    let words = ["a", "b"]
    let pastInput = []
    let currentInput = ""

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Words words={words} currentInput={currentInput} pastInput={pastInput} />
    );
    let renderedWords = renderer.getRenderOutput();

    let wordComponents = renderedWords.props.children.props.children
    let word = wordComponents[0]
    expect(word.props).to.deep.eq({color: "none", currentInput: '', isCurrentInput: true, letters: "a"});
    expect(word.key).to.eq("a");

    let word2 = wordComponents[1]
    expect(word2.props).to.deep.eq({color: "none", currentInput: '', isCurrentInput: false, letters: "b"});
    expect(word2.key).to.eq("b");
  });

  it('renders words correct colors depending on input', () => {
    let words = ["a", "b", "abc", "d"]
    let pastInput = ["a", "c"]
    let currentInput = "ac"

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Words words={words} currentInput={currentInput} pastInput={pastInput} />
    );
    let renderedWords = renderer.getRenderOutput();

    let wordComponents = renderedWords.props.children.props.children
    let correct_word = wordComponents[0]
    expect(correct_word.props).to.deep.eq({color: "green", currentInput: 'ac', isCurrentInput: false, letters: "a"});
    expect(correct_word.key).to.eq("a");

    let incorrect_word = wordComponents[1]
    expect(incorrect_word.props).to.deep.eq({color: "red", currentInput: 'ac', isCurrentInput: false, letters: "b"});
    expect(incorrect_word.key).to.eq("b");

    let current_word = wordComponents[2];
    expect(current_word.props).to.deep.eq({color: "none", currentInput: 'ac', isCurrentInput: true, letters: "abc"});
    expect(current_word.key).to.eq("abc");

    let untyped_word = wordComponents[3]
    expect(untyped_word.props).to.deep.eq({color: "none", currentInput: 'ac', isCurrentInput: false, letters: "d"});
    expect(untyped_word.key).to.eq("d");
  });
});
