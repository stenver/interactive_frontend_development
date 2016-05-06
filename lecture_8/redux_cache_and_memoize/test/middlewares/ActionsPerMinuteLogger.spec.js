import actionsPerMinuteLogger from '../../js/middlewares/ActionsPerMinuteLogger'
import R from 'ramda'

describe('actionsPerMinuteLogger', () => {
  let clock, middleware, logger;
  const mockNext = R.always({})
  const mockAction = {}
  const mockStore = { }

  before(() => {
    clock = sinon.useFakeTimers()
  })

  after(() => {
    clock.restore()
  })

  beforeEach(() => {
    logger = { log: sinon.stub() }
    middleware = actionsPerMinuteLogger(logger)(mockStore)(mockNext)
  })

  it("does not log anything when no actions", () => {
    clock.tick(1000)
    expect(logger.log).to.not.have.been.called
  })

  it("logs 12 when one action in last 5 seconds", () => {
    middleware(mockAction)
    expect(logger.log).to.have.been.calledWith("12 actions per minute")
  })

  it("logs 24 when two actions in last 5 seconds and more action before", () => {
    middleware(mockAction)
    clock.tick(5000)
    middleware(mockAction)
    clock.tick(1000)
    middleware(mockAction)

    const lastLog = R.last(logger.log.getCalls())
    expect(lastLog.args[0]).to.eq('24 actions per minute')
  })

})
