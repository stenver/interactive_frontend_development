'use strict';

import constantActionLogger from '../../middleware/ConstantActionLogger'

describe('ConstantActionLogger', () => {

  let logger, store, next, action, stateBefore, stateAfter;

  beforeEach(() => {
    logger = { warn: sinon.stub() }
    store =  { getState: sinon.stub() }

    store.getState.returns(stateBefore)

    action = { type: 'a', payload: 1 }

    next = (action) => {
      store.getState.returns(stateAfter)
      return action;
    }
  })

  context("when reducing the action changes state", () => {
    // `before` is ran before `beforeEach`
    before( () => {
      stateBefore = "before"
      stateAfter = "after"
    })

    it("does not log warning", () => {
      constantActionLogger(logger)(store)(next)(action)
      expect(logger.warn).to.not.have.been.called
    })
  })

  context("when reducing the action does not change state", () => {
    before( () => {
      stateBefore = "same"
      stateAfter = "same"
    })

    it("logs warning", () => {
      constantActionLogger(logger)(store)(next)(action)
      expect(logger.warn).to.have.been.calledWith(
        "An action was dispatched that did not change state",
        action
      )
    })
  })

})
