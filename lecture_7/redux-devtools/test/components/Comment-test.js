'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import Comment from '../../components/Comment';
import {renderWithWrapperAndFind} from '../Wrapper';

describe('Comment', () => {
  var buildComment = ((author, text) => {
    const element = <Comment author={author} >{text}</Comment>;
    return renderWithWrapperAndFind(element, 'comment')
  });

  it('sets author name in heading 2', () => {
    let comment = buildComment("Sukram", "some text");
    let author = comment.childNodes[0]
    expect(author.tagName).to.eq('H2');
    expect(author.textContent).to.eq('Sukram');
  });

  it('displays the children text', () => {
    let comment = buildComment("Sukram", "some text");
    let text = comment.childNodes[1]
    expect(text.textContent).to.eq('some text');
  });
});

