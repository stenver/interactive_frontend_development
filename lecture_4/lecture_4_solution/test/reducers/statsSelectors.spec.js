import { calculateAccuracy, calculateWordsPerMinute } from '../../js/reducers'

describe('stats selectors', () => {
  describe('calculateAccuracy', () => {
    it('calculates accuracy', () => {
      expect(calculateAccuracy({ words: ["a", "b"], pastInput: ["a", "b"]})).to.eq('100')
      expect(calculateAccuracy({ words: ["a", "b"], pastInput: ["a", "c"]})).to.eq('50')
      expect(calculateAccuracy({ words: ["a", "b"], pastInput: ["b", "c"]})).to.eq('0')
      expect(calculateAccuracy({ words: ["a", "b", "c"], pastInput: ["a"]})).to.eq('100')
    })
  });

  describe('calculateWordsPerMinute', () => {
    var clock = null;

    before(() => {
      clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());
    })
    after(() => {
      clock.restore();
    })

    it('should calculate words per minute correctly', () => {
      let one_min_ago = Math.floor(Date.now() / 1000) - 60;
      expect(calculateWordsPerMinute({ pastInput: ["a"], startTime: one_min_ago })).to.eq('1.00')
      expect(calculateWordsPerMinute({ pastInput: ["a", "b"], startTime: one_min_ago })).to.eq('2.00')
      expect(calculateWordsPerMinute({ pastInput: ["b", "b", "c"], startTime: one_min_ago })).to.eq('3.00')
      let one_sec_ago = Math.floor(Date.now() / 1000) - 1;
      expect(calculateWordsPerMinute({ pastInput: ["a"], startTime: one_sec_ago })).to.eq('60.00')
      expect(calculateWordsPerMinute({ pastInput: ["a", "b"], startTime: one_sec_ago })).to.eq('120.00')
      expect(calculateWordsPerMinute({ pastInput: ["b", "b", "c"], startTime: one_sec_ago })).to.eq('180.00')
    })
  });
});

