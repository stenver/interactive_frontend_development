'use strict';

import reducer from '../../reducers'

describe('reducers', () => {

  const reduceAction = (action) => {
    const originalState = reducer(undefined, {})
    return reducer(originalState, action);
  }

  describe('ADD_COMMENT', () => {
    it('has initial comment', () => {
      const originalState = reducer(undefined, {})
      expect(originalState.comments).to.contain({
        id: 0,
        author: "Scooby",
        text: "Doo"
      })
    });

    it('adds comment if it has author and state', () => {
      let newComment = {
        author: 'A',
        text: 'T',
        id: 1
      }

      const action = {type: 'ADD_COMMENT', payload: newComment}
      const newState = reduceAction(action)
      expect(newState.comments).to.contain(newComment)
    });

    it('does not add comment without author', () => {
      const originalState = reducer(undefined, {})
      let action = {
        type: 'ADD_COMMENT',
        payload: {
          id: 1, author: '', text: 'T'
        }
      }
      const newState = reducer(originalState, action);
      expect(newState.comments).to.eql(originalState.comments)
    })

    it('does not add comment without text', () => {
      const originalState = reducer(undefined, {})
      let action = {
        type: 'ADD_COMMENT',
        payload: {
          id: 1, author: 'A', text: ''
        }
      }
      const newState = reducer(originalState, action);
      expect(newState.comments).to.eql(originalState.comments)
    })
  });

  describe('SET_AUTHOR', () => {
    it('sets author', () => {
      let action = {type: 'SET_AUTHOR', payload: 'A'}
      const newState = reducer(undefined, action)
      expect(newState.author).to.eq('A')
    })
  });

  describe('SET_TEXT', () => {
    it('sets text', () => {
      let action = {type: 'SET_TEXT', payload: 'T'}
      const newState = reducer(undefined, action)
      expect(newState.text).to.eq('T')
    });
  });

  describe('SET_AUTHOR_FILTER', () => {
    it('sets filteredByAuthor', () => {
      let action = {type: 'SET_AUTHOR_FILTER', payload: 'filtered-author'}
      const newState = reducer(undefined, action)
      expect(newState.filteredByAuthor).to.eq('filtered-author')
    });
  });
});
