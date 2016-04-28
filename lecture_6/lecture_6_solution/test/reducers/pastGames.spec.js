import { pastGames }from '../../js/reducers/PastGames'

describe('pastGames', () => {
  context("END_GAME", () => {
    it("saves the game attributes", () => {
      const result = pastGames([], {
        type: 'END_GAME',
        payload: {
          words: ["some", "words"],
          pastInput: ["other", "words"],
          startTime: "now",
          endTime: "later"
        }
      });
      expect(result[0].words).to.deep.eq(["some", "words"]);
      expect(result[0].pastInput).to.deep.eq(["other", "words"]);
      expect(result[0].startTime).to.eq("now");
      expect(result[0].endTime).to.eq("later");
    })
  });
});

