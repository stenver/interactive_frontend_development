define(["react"],
  (React) => {

  const Word = (props) => {
    return(
      <div className="word">{props.word}</div>
    );
  };
  Word.propTypes = {
    word: React.PropTypes.string.isRequired,
  };

  return Word;
});
