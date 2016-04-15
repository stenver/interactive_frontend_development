import speedTyperReducer from '../../js/reducers'

describe('speedTyperReducer SET_CURRENT_INPUT', () => {
  it('should set word as current input when word given', () => {
    const result = speedTyperReducer({currentInput: "", pastInput: []}, {
      type: 'SET_CURRENT_INPUT',
      payload: { currentInput: "Skyrim" }
    })
    expect(result.currentInput).to.eq("Skyrim")
    expect(result.pastInput).to.deep.eq([])
  })

  it('should set word to past input when word ending with space given', () => {
    const result = speedTyperReducer({currentInput: "", pastInput: []}, {
      type: 'SET_CURRENT_INPUT',
      payload: { currentInput: "Skyrim " }
    })
    expect(result.currentInput).to.eq("")
    expect(result.pastInput).to.deep.eq(["Skyrim"])
  })

  it('should put space into current input when space given', () => {
    const result = speedTyperReducer({currentInput: "", pastInput: []}, {
      type: 'SET_CURRENT_INPUT',
      payload: { currentInput: " " }
    })
    expect(result.currentInput).to.eq(" ")
    expect(result.pastInput).to.deep.eq([])
  })
});

