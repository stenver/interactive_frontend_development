'use strict';

import { setCurrentInput } from '../../js/actions'

describe('setCurrentInput', () => {
  it('setCurrentInput should create SET_CURRENT_INPUT action', () => {
    expect(setCurrentInput('Use Redux')).to.deep.eq({
      type: 'SET_CURRENT_INPUT',
	  payload: { currentInput: "Use Redux" }
    })
  })
})
