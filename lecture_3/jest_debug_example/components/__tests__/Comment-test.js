'use strict';

jest.unmock('../Comment');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Comment from '../Comment';

describe('Comment', () => {
  var Wrapper = React.createClass({
    render: function() {
        return (
            <div>{this.props.children}</div>
        );
      }
  });

  var buildComment = ((author, text) => {
    let dom = TestUtils.renderIntoDocument(
      <Wrapper>
        <Comment author={author} >{text}</Comment>
      </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "comment")
  });

  it('sets author name in heading 2', () => {
    let comment = buildComment("Sukram", "some text");
    let author = comment.childNodes[0]
    expect(author.tagName).toEqual('H2');
    expect(author.textContent).toEqual('Sukram');
  });

  it('displays the children text', () => {
    let comment = buildComment("Sukram", "some text");
    let text = comment.childNodes[1]
    expect(text.textContent).toEqual('some text');
  });
});

