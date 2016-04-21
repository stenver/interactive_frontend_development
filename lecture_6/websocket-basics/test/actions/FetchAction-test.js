import {fetchPost, stopCommentFetch} from '../../actions'

let xhr, requests;

describe('fetchPost', () => {
  beforeEach(() => {
    global.XMLHttpRequest = xhr = sinon.useFakeXMLHttpRequest();

    requests = [];
    xhr.onCreate = (xhr) => requests.push(xhr)
  })
  afterEach(() => {
    xhr.restore()
  })

  it('adds comment when fetched and fetching in progress', () => {
    debugger;
    let dispatch = sinon.stub()
    let getState = () => {
      return { fetching: {inProgress: true}}
    }
    fetchPost()(dispatch, getState)
    requests[0].respond(200, {}, '[{"author": "Server", "text": "Said so"}]')

    expect(dispatch).to.have.been.calledWith({
      type: 'ADD_COMMENT',
      payload: {
        id: 1,
        author: 'Server',
        text: 'Said so'
      }
    })
  })

  it('does not add comment when fetching not in progress', () => {
    let dispatch = sinon.stub()
    let getState = () => {
      return { fetching: {inProgress: false}}
    }
    fetchPost()(dispatch, getState)
    requests[0].respond(200, {}, '[{"author": "Server", "text": "Said so"}]')

    expect(dispatch).not.to.have.been.calledWith(sinon.match({type: 'ADD_COMMENT'}))
  })

})
