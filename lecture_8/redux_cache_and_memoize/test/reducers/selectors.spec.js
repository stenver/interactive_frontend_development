import {
  calculateAccuracy,
  calculateWordsPerMinute,
  calculateTimeElapsed,
  getCurrentTime,
  isStarted,
  calculateHighestWordsPerMinute
} from '../../js/reducers'

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
      let now = Math.floor(Date.now() / 1000);
      let one_min_ago = Math.floor(Date.now() / 1000) - 60;
      expect(calculateWordsPerMinute({ pastInput: ["a"], startTime: one_min_ago }, now)).to.eq('1.00')
      expect(calculateWordsPerMinute({ pastInput: ["a", "b"], startTime: one_min_ago }, now)).to.eq('2.00')
      expect(calculateWordsPerMinute({ pastInput: ["b", "b", "c"], startTime: one_min_ago }, now)).to.eq('3.00')
      let one_sec_ago = Math.floor(Date.now() / 1000) - 1;
      expect(calculateWordsPerMinute({ pastInput: ["a"], startTime: one_sec_ago }, now)).to.eq('60.00')
      expect(calculateWordsPerMinute({ pastInput: ["a", "b"], startTime: one_sec_ago }, now)).to.eq('120.00')
      expect(calculateWordsPerMinute({ pastInput: ["b", "b", "c"], startTime: one_sec_ago }, now)).to.eq('180.00')
    })
  });

  describe('calculateHighestWordsPerMinute', () => {

    it('calculate highest words per minute across games', () => {
      let now = Math.floor(Date.now() / 1000);
      let oneMinuteAgo = now - 60;

      const games = [
        { pastInput: ["a"], startTime:  oneMinuteAgo, endTime: now},
        { pastInput: ["a", "b"], startTime:  oneMinuteAgo, endTime: now}
      ]

      expect(calculateHighestWordsPerMinute(games)).to.eq('2.00')
    })
  })

  describe('calculateTimeElapsed', () => {
    var clock = null;

    before(() => {
      clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());
    })
    after(() => {
      clock.restore();
    })

    it('should calculate time elapsed correctly', () => {
      let now = Math.floor(Date.now() / 1000);
      let one_sec_later = Math.floor(Date.now() / 1000) + 1;
      let one_min_later = Math.floor(Date.now() / 1000) + 60;
      expect(calculateTimeElapsed(now, one_sec_later)).to.eq('1')
      expect(calculateTimeElapsed(now, one_min_later)).to.eq('60')
    })
  });

  describe('getCurrentTime', () => {
    var clock = null;

    before(() => {
      clock = sinon.useFakeTimers(new Date(2011,9,1).getTime());
    })
    after(() => {
      clock.restore();
    })

    it('gets the current time in seconds', () => {
      let now = Math.floor(Date.now() / 1000);
      expect(getCurrentTime()).to.eq(now)
    })
  });

  describe('isStarted', () => {
    it('returns true if current game has startTime', () => {
      expect(isStarted({currentGame: { startTime: "something" } })).to.eq(true)
    })
    it('returns false if current game does not have startTime', () => {
      expect(isStarted({currentGame: { startTime: undefined } })).to.eq(false)
    })
  });
});

