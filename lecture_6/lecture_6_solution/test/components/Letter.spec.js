'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Letter from '../../js/components/Letter';
import { wrap } from '../Wrapper'

describe('Letter', () => {

  var buildLetter = ((color, letter) => {
    let dom = wrap( <Letter color={color} letter={letter} /> );
    return TestUtils.findRenderedDOMComponentWithClass(dom, "letter")
  });

  it('sets the class and text', () => {
    let letter = buildLetter("green", "L");
    expect(letter.className).to.eq("letter green");
    expect(letter.textContent).to.eq("L");
  });
});
