'use strict';

jest.unmock('../StatsContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StatsContainer from "../StatsContainer";
import Stats from "../Stats";

Stats.mockImplementation(() => <div />)

describe('StatsContainer', () => {
  var buildStatsContainer = ((words, pastInput, startTime) => {
    return TestUtils.renderIntoDocument(
      <StatsContainer words={words} pastInput={pastInput} startTime={startTime}/>
    );
  });

  it('calculates accuaracy', () => {
    var startTime=Math.floor(Date.now() / 1000);

    let statsContainer = buildStatsContainer(["a", "c"], ["a", "b"], startTime);
    expect(statsContainer.calculateAccuaracy()).toEqual("50");

    statsContainer = buildStatsContainer(["a", "b"], ["a", "b"], startTime);
    expect(statsContainer.calculateAccuaracy()).toEqual("100");
  });

  it('calculates words per minute', () => {
    let minute = 1000 * 60;
    let startTime = Math.floor((Date.now() - minute) / 1000);

    let statsContainer = buildStatsContainer([], ["a", "b"], startTime);
    expect(statsContainer.calculateWordsPerMinute()).toEqual("2.00");

    statsContainer = buildStatsContainer([], ["a", "b", "c", "d"], startTime);
    expect(statsContainer.calculateWordsPerMinute()).toEqual("4.00");
  });

  it('renders Stats with correct props', () => {
    let minute = 1000 * 60;
    let startTime = Math.floor((Date.now() - minute) / 1000);
    let pastInput = ["a", "b"]
    let words = ["a", "c"]

    let renderer = TestUtils.createRenderer();
    renderer.render(
      <StatsContainer words={words} pastInput={pastInput} startTime={startTime}/>
    );
    let stats = renderer.getRenderOutput();
    expect(stats.props).toEqual({wordsPerMinute: "2.00", accuaracy: "50"});
  });
});
