'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Stats from '../../js/components/Stats';

describe('Stats', () => {

  var buildStats = ((props) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(React.createElement(Stats, props));
    return renderer.getRenderOutput();
  });

  it('displays the stats', () => {
    let stats = buildStats({
      accuracy: "100",
      wordsPerMinute: "60",
      timeElapsed: "10",
      highestWordsPerMinute: "80"
    });
    let wordsPerMinute = stats.props.children[1];
    let accuracy = stats.props.children[3];
    let timeElapsed = stats.props.children[5];
    let highestWordsPerMinuteWrapper = stats.props.children[6]
    let highestWordsPerMinute = highestWordsPerMinuteWrapper.props.children[1]
    expect(wordsPerMinute.props.children).to.eq("60");
    expect(accuracy.props.children).to.deep.eq(["100", "%"]);
    expect(timeElapsed.props.children).to.deep.eq(["10", " seconds"]);
    expect(highestWordsPerMinute.props.children).to.eq("80");
  });
});
