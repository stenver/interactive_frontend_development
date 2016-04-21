'use strict';

import reduce from '../../reducers/FetchReducer'

describe('FetchReducer', () => {

  it('is not in progress initially', () => {
    const initialState = reduce(undefined, {})
    expect(initialState).to.eql({
      inProgress: false
    })
  })

  describe('COMMENT_FETCH_REQUESTED', () => {
    it('sets fetching to be in progress', () => {
      let action = {type: 'COMMENT_FETCH_REQUESTED', payload: {}}
      const newState = reduce(undefined, action)
      expect(newState.inProgress).to.eq(true)
    });
  });

  describe('COMMENT_FETCHED', () => {
    it('sets fetching to be not in progress', () => {
      let action = {type: 'COMMENT_FETCHED', payload: {}}
      const newState = reduce(undefined, action)
      expect(newState.inProgress).to.eq(false)
    });
  });

});
