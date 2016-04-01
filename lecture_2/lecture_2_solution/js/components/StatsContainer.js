define(["react"], (React) => {
  const StatsContainer = (props) => {
    return (
      <div className="StatsContainer">
        <div className="StatDiv">Word per minute: </div>
        <div className="StatDiv">{props.wordsPerMinute}</div>
        <div className="StatDiv">Accuaracy: </div>
        <div className="StatDiv">{props.accuaracy}% </div>
      </div>
    );
  };
  StatsContainer.propTypes = {
    wordsPerMinute: React.PropTypes.number.isRequired,
    accuaracy: React.PropTypes.number.isRequired,
  }
  return StatsContainer;
});
