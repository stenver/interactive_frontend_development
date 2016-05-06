'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import { HighScoreContainer } from '../../js/containers/HighScoreContainer';

describe('HighScoreContainer', () => {

  var buildSpeedTyper = ((pastGames) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <HighScoreContainer pastGames={pastGames} />
    );
    return renderer.getRenderOutput();
  });

  it('renders the HighScoreContainer container', () => {
    const pastGames = [{
      words: ["a", "b"],
      pastInput: ["a", "c"],
      startTime: 0,
      endTime: 60
    }]
    let highScoreContainers = buildSpeedTyper(pastGames);

    let highScoreContainer = highScoreContainers.props.children[0]
    expect(highScoreContainer.key).to.eq('0');
    expect(highScoreContainer.props.accuracy).to.eq('50');
    expect(highScoreContainer.props.wordsPerMinute).to.eq('2.00');
    expect(highScoreContainer.props.timeElapsed).to.eq('60');
  });
});
