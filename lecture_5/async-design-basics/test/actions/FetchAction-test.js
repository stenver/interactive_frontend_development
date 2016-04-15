import {fetchPost, stopCommentFetch, addComment} from '../../actions'

let clock;

describe('fetchPost', () => {
  beforeEach(() => {
    clock = sinon.useFakeTimers()
  })
  afterEach(() => {
    clock.restore()
  })

  it('adds comment when fetched', () => {
    let dispatch = sinon.stub()
    fetchPost()(dispatch)
    clock.tick(1000)
    expect(dispatch).to.have.been.calledWith({
      type: 'ADD_COMMENT',
      payload: {
        id: 1,
        author: 'Server',
        text: 'Said so'
      }
    })
  })

  it('stops fetching when fetched', () => {
    let dispatch = sinon.stub()
    fetchPost()(dispatch)
    clock.tick(1000)
    expect(dispatch).to.have.been.calledWith({
      type: 'COMMENT_FETCH_STOPPED',
      payload: {}
    })
  })

})

describe('stopCommentFetch', () => {
  beforeEach(() => {
    clock = sinon.useFakeTimers()
  })
  afterEach(() => {
    clock.restore()
  })

  it('clears fetching timer', () => {
    let dispatch = sinon.stub()
    fetchPost()(dispatch)
    stopCommentFetch()
    clock.tick(1000)
    expect(dispatch).not.to.have.been.called
  })
})
