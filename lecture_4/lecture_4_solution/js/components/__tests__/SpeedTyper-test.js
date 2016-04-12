'use strict';

jest.unmock('../SpeedTyper');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyper from '../SpeedTyper';
import WordsContainer from "../WordsContainer";
import TypingContainer from "../TypingContainer";
import StatsContainer from "../StatsContainer";

describe('SpeedTyper', () => {
  var words=["some", "words"]
  var pastInput=["some", "input"]
  var startTime=Date.now()
  var currentInput="current"
  var onUserInput=function(){}

  var buildSpeedTyper = ((children) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <SpeedTyper
        words={words}
        startTime={startTime}
        currentInput={currentInput}
        pastInput={pastInput}
        onUserInput={onUserInput}
      />
    );
    return renderer.getRenderOutput();
  });

  it('renders the stats container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children
    let statsContainer = wordsBox.props.children[0]
    expect(statsContainer.type).toBe(StatsContainer);
    expect(statsContainer.props).toEqual({
      words: words,
      pastInput: pastInput,
      startTime: startTime
    });
  });

  it('renders the words container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children
    let wordsContainer = wordsBox.props.children[1]
    expect(wordsContainer.type).toBe(WordsContainer);
    expect(wordsContainer.props).toEqual({
      words: words,
      pastInput: pastInput,
      currentInput: currentInput
    });
  });

  it('renders the typing container', () => {
    let speedTyper = buildSpeedTyper("green");
    let wordsBox = speedTyper.props.children
    let typingContainer = wordsBox.props.children[2]
    expect(typingContainer.type).toBe(TypingContainer);
    expect(typingContainer.props).toEqual({
      currentInput: currentInput,
      onUserInput: onUserInput
    });
  });
});
