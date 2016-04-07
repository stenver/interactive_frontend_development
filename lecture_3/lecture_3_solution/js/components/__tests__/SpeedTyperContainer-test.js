'use strict';

jest.unmock('../SpeedTyperContainer');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import SpeedTyperContainer from "../SpeedTyperContainer";
import SpeedTyper from "../SpeedTyper";

SpeedTyper.mockImplementation(() => <div />)

describe('SpeedTyperContainer', () => {
  var buildSpeedTyperContainer = (() => {
    return TestUtils.renderIntoDocument(
      <SpeedTyperContainer />
    );
  });

  it('changes current input if letter was entered', () => {
    let speedTyperContainer = buildSpeedTyperContainer();
    speedTyperContainer.handleUserInput("something");
    expect(speedTyperContainer.state).toEqual({currentInput: "something", pastInput: []});
  });

  it('sets user input to past input if current input last letter was space', () => {
    let speedTyperContainer = buildSpeedTyperContainer();
    speedTyperContainer.handleUserInput("something ");
    expect(speedTyperContainer.state).toEqual({currentInput: "", pastInput: ["something"]});
  });

  it('renders SpeedTyper', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <SpeedTyperContainer />
    );
    let speedTyper = renderer.getRenderOutput();
	expect(speedTyper.type).toEqual(SpeedTyper);
  });
});
