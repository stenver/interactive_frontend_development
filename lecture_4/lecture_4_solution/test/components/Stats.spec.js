'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Stats from '../../js/components/Stats';

describe('Stats', () => {

  var buildStats = ((accuaracy, wordsPerMinute) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Stats accuaracy={accuaracy} wordsPerMinute={wordsPerMinute} />
    );
    return renderer.getRenderOutput();
  });

  it('displays the stats', () => {
    let stats = buildStats("100", "60");
    let wordsPerMinute = stats.props.children[1];
    let accuaracy = stats.props.children[3];
    expect(wordsPerMinute.props.children).to.eq("60");
    expect(accuaracy.props.children).to.deep.eq(["100", "%"]);
  });
});
