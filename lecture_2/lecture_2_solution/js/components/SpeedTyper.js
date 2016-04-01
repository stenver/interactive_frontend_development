define(["react", "./StatsContainer.js", "./WordsContainer.js", "./TypingContainer.js"],
  (React, StatsContainer, WordsContainer, TypingContainer) => {
  var SpeedTyper = React.createClass({
    getDefaultProps: function() {
      return {
        words: ["does", "short", "unit", "air", "our", "find", "war", "morning", "they"],
        wordsPerMinute: 30,
        accuaracy: 90
      };
    },

    render: function() {
      return (
        <div className="SpeedTyper">
          <div className="wordsbox">
            <StatsContainer
              wordsPerMinute={this.props.wordsPerMinute}
              accuaracy={this.props.accuaracy}
            />
            <WordsContainer words={this.props.words} />
            <TypingContainer />
          </div>
        </div>
      );
    }
  });
  return SpeedTyper;
});
