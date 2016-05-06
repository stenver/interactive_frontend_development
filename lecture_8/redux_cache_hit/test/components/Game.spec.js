'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Game from '../../js/components/Game';
import SpeedTyper from "../../js/components/SpeedTyper";
import StartButtonContainer from "../../js/containers/StartButtonContainer";
import HighScoreContainer from "../../js/containers/HighScoreContainer";

describe('Game', () => {

  var buildSpeedTyper = (() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Game />
    );
    return renderer.getRenderOutput();
  });

  it('renders the game container', () => {
    let game = buildSpeedTyper();

    let speedTyper = game.props.children[0]
    expect(speedTyper.type).to.eq(SpeedTyper);

    let startButtonContainer = game.props.children[1]
    expect(startButtonContainer.type).to.eq(StartButtonContainer);

    let highScoreContainer = game.props.children[2]
    expect(highScoreContainer.type).to.eq(HighScoreContainer);
  });
});
