'use strict';

jest.unmock('../CommentBox');

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CommentBox from '../CommentBox';

describe('CommentBox', () => {
  var Wrapper = React.createClass({
    render: function() {
      return (
          <div>{this.props.children}</div>
      );
    }
  });

  var buildCommentBox = ((data, onCommentSubmit) => {
    debugger
    let dom = TestUtils.renderIntoDocument(
      <Wrapper>
        <CommentBox data={data} onCommentSubmit={onCommentSubmit} />
      </Wrapper>
    );

    return TestUtils.findRenderedDOMComponentWithClass(dom, "commentBox")
  });

  it('creates Comments heading', () => {
    let commentBox = buildCommentBox([{"id": 1, "author": "wat", "text": "wut"}], ()=>{});
    let commentHeading = commentBox.childNodes[0];
    expect(commentHeading.tagName).toEqual('H1');
    expect(commentHeading.textContent).toEqual('Comments');
  });

  it('creates CommentList', () => {
    let commentBox = buildCommentBox([{"id": 1}], ()=>{});
    let commentList = commentBox.childNodes[1];
    debugger
    expect(commentList.tagName).toEqual('H1');
    expect(commentList.textContent).toEqual('Comments');
  });

  it('creates CommentForm', () => {
    let commentBox = buildCommentBox([{"id": 1}], ()=>{});
    let commenForm = commentBox.childNodes[2];
    expect(commenForm.tagName).toEqual('H1');
    expect(commenForm.textContent).toEqual('Comments');
  });
});

