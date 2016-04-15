'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import R from 'ramda'
import Fetcher from '../../components/Fetcher';
import {renderWithWrapperAndFind} from '../Wrapper';

const defaultProps = {
  onFetch: sinon.stub(),
  inProgress: false
}

var buildFetcher = ((props) => {
  const element = React.createElement(Fetcher, R.merge(defaultProps, props));
  return renderWithWrapperAndFind(element, 'fetcher')
});

describe('Fetcher', () => {

  context('when not in progress', () => {
    it('has button with fetch description', () => {
      let button = buildFetcher({inProgress: false}).childNodes[0];
      expect(button.tagName).to.eq('BUTTON');
      expect(button.textContent).to.eq('Click here to fetch additional comment');
    });

    it('calls onFetch when button clicked', () => {
      let onFetch = sinon.stub()
      let button = buildFetcher({onFetch, inProgress: false}).childNodes[0];
      TestUtils.Simulate.click(button)
      expect(onFetch).to.have.been.calledOnce
    });
  });

  context('when in progress', () => {
    it('has button with in progress description', () => {
      let button = buildFetcher({inProgress: true}).childNodes[0];
      expect(button.textContent).to.eq('Request in flight...');
    })

    it('does not call onFetch when button clicked', () => {
      let onFetch = sinon.stub()
      let button = buildFetcher({onFetch, inProgress: true}).childNodes[0];
      TestUtils.Simulate.click(button)
      expect(onFetch).not.to.have.been.called
    })
  });

});

