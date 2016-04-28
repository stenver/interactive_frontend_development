'use strict';

import reduce from '../../reducers/CommentFormReducer'

describe('CommentFormReducer', () => {

  const reduceAction = (action) => {
    const originalState = reduce(undefined, {})
    return reduce(originalState, action);
  }

  describe('ADD_COMMENT', () => {
    it('does not have initial comments', () => {
      const originalState = reduce(undefined, {})
      expect(originalState.comments).to.eql([])
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
      const originalState = reduce(undefined, {})
      let action = {
        type: 'ADD_COMMENT',
        payload: {
          id: 1, author: '', text: 'T'
        }
      }
      const newState = reduce(originalState, action);
      expect(newState.comments).to.eql(originalState.comments)
    })

    it('does not add comment without text', () => {
      const originalState = reduce(undefined, {})
      let action = {
        type: 'ADD_COMMENT',
        payload: {
          id: 1, author: 'A', text: ''
        }
      }
      const newState = reduce(originalState, action);
      expect(newState.comments).to.eql(originalState.comments)
    })
  });

  describe('SET_AUTHOR', () => {
    it('sets author', () => {
      let action = {type: 'SET_AUTHOR', payload: 'A'}
      const newState = reduce(undefined, action)
      expect(newState.author).to.eq('A')
    })
  });

  describe('SET_TEXT', () => {
    it('sets text', () => {
      let action = {type: 'SET_TEXT', payload: 'T'}
      const newState = reduce(undefined, action)
      expect(newState.text).to.eq('T')
    });
  });

});
