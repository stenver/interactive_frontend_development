'use strict';

jest.unmock('../WordsContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import WordsContainer from "../WordsContainer";
import Words from "../Words";
import Word from "../Word";
import Letter from "../Letter";

Words.mockImplementation(() => <div />)
Word.mockImplementation(() => <div />)
Letter.mockImplementation(() => <div />)

describe('WordsContainer', () => {
  var buildWordsContainer = ((words, currentInput, pastInput) => {
    return TestUtils.renderIntoDocument(
      <WordsContainer words={words} currentInput={currentInput} pastInput={pastInput}/>
    );
  });

  // it('calculates accuaracy', () => {
  //   var startTime=Math.floor(Date.now() / 1000);

  //   let WordsContainer = buildWordsContainer(["a", "c"], ["a", "b"], startTime);
  //   expect(WordsContainer.calculateAccuaracy()).toEqual("50");

  //   WordsContainer = buildWordsContainer(["a", "b"], ["a", "b"], startTime);
  //   expect(WordsContainer.calculateAccuaracy()).toEqual("100");
  // });

  // it('calculates words per minute', () => {
  //   let minute = 1000 * 60;
  //   let startTime = Math.floor((Date.now() - minute) / 1000);

  //   debugger
  //   let WordsContainer = buildWordsContainer([], ["a", "b"], startTime);
  //   expect(WordsContainer.calculateWordsPerMinute()).toEqual("2.00");

  //   WordsContainer = buildWordsContainer([], ["a", "b", "c", "d"], startTime);
  //   expect(WordsContainer.calculateWordsPerMinute()).toEqual("4.00");
  // });

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
    expect(letter.props).toEqual({color: "none", children: "a"});
    expect(letter.key).toEqual("0");

    let word = wordsContainer.props.children[1]
    expect(word.props).toEqual({color: "none", children: "b"});
    expect(word.key).toEqual("b");
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
    expect(correct_word.props).toEqual({color: "green", children: "a"});
    expect(correct_word.key).toEqual("a");

    let incorrect_word = wordsContainer.props.children[1]
    expect(incorrect_word.props).toEqual({color: "red", children: "b"});
    expect(incorrect_word.key).toEqual("b");

    let letters = wordsContainer.props.children[2];

    let correct_letter = letters.props.children[0]
    expect(correct_letter.props).toEqual({color: "green", children: "a"});
    expect(correct_letter.key).toEqual("0");

    let incorrect_letter = letters.props.children[1]
    expect(incorrect_letter.props).toEqual({color: "red", children: "b"});
    expect(incorrect_letter.key).toEqual("1");

    let untyped_letter = letters.props.children[2]
    expect(untyped_letter.props).toEqual({color: "none", children: "c"});
    expect(untyped_letter.key).toEqual("2");

    let untyped_word = wordsContainer.props.children[3]
    expect(untyped_word.props).toEqual({color: "none", children: "d"});
    expect(untyped_word.key).toEqual("d");
  });
});
