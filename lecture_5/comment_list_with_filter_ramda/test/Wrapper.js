import React from 'react';
import TestUtils from 'react-addons-test-utils';

const Wrapper = React.createClass({
  render: function() {
    return (
        <div>{this.props.children}</div>
    );
  }
});

const renderWithWrapperAndFind = (element, className) => {
  let dom = TestUtils.renderIntoDocument(
    <Wrapper>
      {element}
    </Wrapper>
  );

  return TestUtils.findRenderedDOMComponentWithClass(dom, className)
};

module.exports = { renderWithWrapperAndFind };
