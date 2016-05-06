import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Wrapper = React.createClass({
  render: function() {
    return (
        <div>{this.props.children}</div>
    );
  }
});

const wrap = (element) => {
  return TestUtils.renderIntoDocument(
    <Wrapper>
      {element}
    </Wrapper>
  );
};

const wrapAndFindByTag = (element, tagName) => {
  const dom = wrap(element)
  return TestUtils.findRenderedDOMComponentWithTag(dom, tagName)
}

module.exports = { wrap, wrapAndFindByTag };
