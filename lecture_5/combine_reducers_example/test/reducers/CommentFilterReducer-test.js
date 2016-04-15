'use strict';

import reduce from '../../reducers/CommentFilterReducer'

describe('CommentFilterReducer', () => {
  describe('SET_AUTHOR_FILTER', () => {
    it('sets filteredByAuthor', () => {
      let action = {type: 'SET_AUTHOR_FILTER', payload: 'filtered-author'}
      const newState = reduce(undefined, action)
      expect(newState.author).to.eq('filtered-author')
    });
  });

  it('has initial filter', () => {
    const initialState = reduce(undefined, {})
    expect(initialState).to.eql({
      author: ''
    })
  })
});
