'use strict';

jest.unmock('../Word');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Word from '../Word';

describe('Word', () => {

  var Wrapper = React.createClass({
    render: function() {
      return (
        <div>{this.props.children}</div>
      );
    }
  });

  var buildWord = ((color, children) => {
    let dom = TestUtils.renderIntoDocument(
      <Wrapper>
        <Word color={color} >{children}</Word>
      </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "word")
  });

  it('sets the class and text', () => {
    let word = buildWord("green", "L");
    expect(word.className).toEqual("word green");
    expect(word.textContent).toEqual("L");
  });
});
