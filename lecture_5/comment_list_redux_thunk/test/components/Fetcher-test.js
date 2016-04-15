'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import R from 'ramda'
import Fetcher from '../../components/Fetcher';
import {renderWithWrapperAndFind} from '../Wrapper';

const defaultProps = { onFetch: sinon.stub() }

describe('Fetcher', () => {
  var buildFetcher = ((props) => {
    const element = React.createElement(Fetcher, R.merge(defaultProps, props));
    return renderWithWrapperAndFind(element, 'fetcher')
  });

  it('has button with fetch description', () => {
    let button = buildFetcher().childNodes[0];
    expect(button.tagName).to.eq('BUTTON');
    expect(button.textContent).to.eq('Click here to fetch additional comment');
  });

  it('calls onFetch when button clicked', () => {
    let onFetch = sinon.stub()
    let button = buildFetcher({onFetch}).childNodes[0];
    TestUtils.Simulate.click(button)
    expect(onFetch).to.have.been.calledOnce
  });

});

