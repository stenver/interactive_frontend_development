import R from 'ramda'

const sampleSeconds = 5;

export default (logger) => (store) => (next) => {
  let sampledActionTriggerTimes = [];
  return (action) => {
    const now = Date.now()
    const sampleCutOffTime = now - (sampleSeconds * 1000)

    sampledActionTriggerTimes = R.compose(
      R.append(now),
      R.filter(R.lt(sampleCutOffTime))
    )(sampledActionTriggerTimes)

    const actionCountPerMinute = sampledActionTriggerTimes.length * (60 / sampleSeconds);
    logger.log(`${actionCountPerMinute} actions per minute`)

    const result = next(action);
    return result;
  }
}
