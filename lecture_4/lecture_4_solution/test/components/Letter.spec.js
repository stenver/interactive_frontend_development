'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Letter from '../../js/components/Letter';

describe('Letter', () => {

  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildLetter = ((color, letter) => {
    let dom = TestUtils.renderIntoDocument(
      <Wrapper>
        <Letter color={color} letter={letter} />
      </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "letter")
  });

  it('sets the class and text', () => {
    let letter = buildLetter("green", "L");
    expect(letter.className).to.eq("letter green");
    expect(letter.textContent).to.eq("L");
  });
});
