'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import KeyPressListener from '../../components/KeyPressListener';

describe('KeyPressListener', () => {
  var buildKeyPressListener = ((handleKeyPress) => {
    return TestUtils.renderIntoDocument(
      <KeyPressListener handleKeyPress={handleKeyPress} />
    );
  });

  it('calls handleKeyPress with the key string when keypress triggered on window', () => {
    let handleKeyPress = sinon.stub()
    let keyPressListener = buildKeyPressListener(handleKeyPress);

    var event = new window.KeyboardEvent('keypress', {keyCode: 69})
    window.dispatchEvent(event)
    expect(handleKeyPress).to.have.been.calledWith("E")
  });

});
