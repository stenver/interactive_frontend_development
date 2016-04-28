'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Stats from '../../js/components/Stats';

describe('Stats', () => {

  var buildStats = ((accuracy, wordsPerMinute, timeElapsed) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Stats accuracy={accuracy} wordsPerMinute={wordsPerMinute} timeElapsed={timeElapsed}/>
    );
    return renderer.getRenderOutput();
  });

  it('displays the stats', () => {
    let stats = buildStats("100", "60", "10");
    let wordsPerMinute = stats.props.children[1];
    let accuracy = stats.props.children[3];
    let timeElapsed = stats.props.children[5];
    expect(wordsPerMinute.props.children).to.eq("60");
    expect(accuracy.props.children).to.deep.eq(["100", "%"]);
    expect(timeElapsed.props.children).to.deep.eq(["10", " seconds"]);
  });
});
