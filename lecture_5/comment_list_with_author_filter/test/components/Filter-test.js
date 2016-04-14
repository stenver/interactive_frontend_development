'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Filter from '../../components/Filter';
import {renderWithWrapperAndFind} from '../Wrapper';

const defaultProps = {
  authors: [],
  selectedAuthor: "",
  onSelectAuthor: sinon.stub()
}

describe('Filter', () => {
  var buildFilter = ((props) => {
    const allProps = Object.assign({}, defaultProps, props)
    return renderWithWrapperAndFind(React.createElement(Filter, allProps), 'comment-filter')
  });

  it('has default option All', () => {
    let filter = buildFilter();
    let optionNodes = filter.children

    expect(optionNodes.length).to.eq(1)
    expect(optionNodes[0].value).to.eq('')
    expect(optionNodes[0].text).to.eq('All')
    expect(filter.value).to.eq('')
  });

  it('creates options for authors', () => {
    let filter = buildFilter({
      authors: ["a", "b"]
    });
    let optionNodes = filter.children
    expect(optionNodes.length).to.eq(3)
    expect(optionNodes[1].value).to.eq("a")
    expect(optionNodes[1].text).to.eq("a")
    expect(optionNodes[2].value).to.eq("b")
    expect(optionNodes[2].text).to.eq("b")
  });

  it('calls onSelectAuthor when option selected', () => {
    let onSelectAuthor = sinon.stub()
    let filter = buildFilter({
      authors: ["a", "b"],
      onSelectAuthor: onSelectAuthor
    });
    filter.value = "a"
    TestUtils.Simulate.change(filter);
    expect(onSelectAuthor).to.have.been.calledWith("a")
  })
});

