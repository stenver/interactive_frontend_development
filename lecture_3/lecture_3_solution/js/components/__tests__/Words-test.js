'use strict';

jest.unmock('../Words');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Words from '../Words';

describe('Words', () => {

  var buildWords = ((children) => {
    let renderer = TestUtils.createRenderer();
    renderer.render(
      <Words>{children}</Words>
    );
    return renderer.getRenderOutput();
  });

  it('renders the children', () => {
    let words = buildWords("green");
    let renderedChildren = words.props.children.props.children
    expect(renderedChildren).toEqual("green");
  });
});
