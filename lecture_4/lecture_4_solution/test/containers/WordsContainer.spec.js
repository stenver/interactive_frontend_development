'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { WordsContainer } from "../../js/containers/WordsContainer";
import Words from "../../js/components/Words";
import Word from "../../js/components/Word";
import Letter from "../../js/components/Letter";

describe('WordsContainer', () => {

  it('renders words and letters without color if no input', () => {
    let words = ["a", "b"]
    let pastInput = []
    let currentInput = ""

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <WordsContainer words={words} currentInput={currentInput} pastInput={pastInput} />
    );
    let wordsContainer = renderer.getRenderOutput();

    let letters = wordsContainer.props.children[0];
    let letter = letters.props.children[0]
    expect(letter.props).to.deep.eq({color: "none", children: "a"});
    expect(letter.key).to.eq("0");

    let word = wordsContainer.props.children[1]
    expect(word.props).to.deep.eq({color: "none", children: "b"});
    expect(word.key).to.eq("b");
  });

  it('renders words and letters with correct colors depending on input', () => {
    let words = ["a", "b", "abc", "d"]
    let pastInput = ["a", "c"]
    let currentInput = "ac"

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <WordsContainer words={words} currentInput={currentInput} pastInput={pastInput} />
    );
    let wordsContainer = renderer.getRenderOutput();

    let correct_word = wordsContainer.props.children[0]
    expect(correct_word.props).to.deep.eq({color: "green", children: "a"});
    expect(correct_word.key).to.eq("a");

    let incorrect_word = wordsContainer.props.children[1]
    expect(incorrect_word.props).to.deep.eq({color: "red", children: "b"});
    expect(incorrect_word.key).to.eq("b");

    let letters = wordsContainer.props.children[2];

    let correct_letter = letters.props.children[0]
    expect(correct_letter.props).to.deep.eq({color: "green", children: "a"});
    expect(correct_letter.key).to.eq("0");

    let incorrect_letter = letters.props.children[1]
    expect(incorrect_letter.props).to.deep.eq({color: "red", children: "b"});
    expect(incorrect_letter.key).to.eq("1");

    let untyped_letter = letters.props.children[2]
    expect(untyped_letter.props).to.deep.eq({color: "none", children: "c"});
    expect(untyped_letter.key).to.eq("2");

    let untyped_word = wordsContainer.props.children[3]
    expect(untyped_word.props).to.deep.eq({color: "none", children: "d"});
    expect(untyped_word.key).to.eq("d");
  });
});
