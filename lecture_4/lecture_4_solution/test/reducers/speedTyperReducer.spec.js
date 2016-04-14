import speedTyperReducer from '../../js/reducers'

describe('speedTyperReducer', () => {
  it('should handle SET_CURRENT_INPUT when word given', () => {
    const result = speedTyperReducer({currentInput: "", pastInput: []}, {
      type: 'SET_CURRENT_INPUT',
      payload: { currentInput: "Skyrim" }
    })
    expect(result.currentInput).to.eq("Skyrim")
    expect(result.pastInput).to.deep.eq([])
  })

  it('should handle SET_CURRENT_INPUT when word ending with space given', () => {
    const result = speedTyperReducer({currentInput: "", pastInput: []}, {
      type: 'SET_CURRENT_INPUT',
      payload: { currentInput: "Skyrim " }
    })
    expect(result.currentInput).to.eq("")
    expect(result.pastInput).to.deep.eq(["Skyrim"])
  })

  it('should handle SET_CURRENT_INPUT when space given', () => {
    const result = speedTyperReducer({currentInput: "", pastInput: []}, {
      type: 'SET_CURRENT_INPUT',
      payload: { currentInput: " " }
    })
    expect(result.currentInput).to.eq(" ")
    expect(result.pastInput).to.deep.eq([])
  })
});

