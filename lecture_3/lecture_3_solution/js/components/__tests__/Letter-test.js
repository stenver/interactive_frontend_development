'use strict';

jest.unmock('../Letter');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Letter from '../Letter';

describe('Letter', () => {

  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildLetter = ((color, children) => {
    let dom = TestUtils.renderIntoDocument(
      <Wrapper>
        <Letter color={color} >{children}</Letter>
      </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "letter")
  });

  it('sets the class and text', () => {
    let letter = buildLetter("green", "L");
    expect(letter.className).toEqual("letter green");
    expect(letter.textContent).toEqual("L");
  });
});
