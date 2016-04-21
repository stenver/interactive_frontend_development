import R from 'ramda'

let constantActionLogger = (logger) => (store) => (next) => (action) => {
  const stateBefore = store.getState()
  const result = next(action);
  const stateAfter = store.getState()
  if (R.equals(stateBefore, stateAfter)) {
    logger.warn("An action was dispatched that did not change state", action);
  }
}

export default constantActionLogger
