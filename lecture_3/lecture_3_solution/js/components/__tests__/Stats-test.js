'use strict';

jest.unmock('../Stats');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Stats from '../Stats';

describe('Stats', () => {

  var buildStats = ((accuracy, wordsPerMinute) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Stats accuracy={accuracy} wordsPerMinute={wordsPerMinute} />
    );
    return renderer.getRenderOutput();
  });

  it('displays the stats', () => {
    let stats = buildStats("100", "60");
    let wordsPerMinute = stats.props.children[1];
    let accuracy = stats.props.children[3];
    expect(wordsPerMinute.props.children).toEqual("60");
    expect(accuracy.props.children).toEqual(["100", "%"]);
  });
});
