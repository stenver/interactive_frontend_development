import React from 'react';
import Words from "../components/Words";
import Word from "../components/Word";
import Letter from "../components/Letter";
import { connect } from 'react-redux'

const WordsContainer = (props) => {

  const buildLetters = (word) => {
    let letters = [];
    for(var i = 0; i < word.length; i++) {
      let letter = word[i]
      let color = "none"
      if (i < props.currentInput.length){
        color = (props.currentInput[i] == letter ? "green" : "red")
      }
      letters.push(<Letter key={i} color={color}>{letter}</Letter>)
    };
    return letters;
  };

  const buildWords = () => {
    let childNodes = [];
    props.words.forEach((word, index) => {
      let letters = word;
      let color = "none";
      if (index === props.pastInput.length) {
        letters = buildLetters(word);
      } else if (index < props.pastInput.length) {
        color = (props.pastInput[index] === word ? "green" : "red" )
      }
      childNodes.push(<Word color={color} key={word} >{letters}</Word>)
    });
    return childNodes;
  };

  return(
    <Words>
      {buildWords()}
    </Words>
  );
};
WordsContainer.propTypes = {
  words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  currentInput: React.PropTypes.string.isRequired,
  pastInput: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
}

const mapStateToProps = (state) => {
  return {
    words: state.words,
    currentInput: state.currentInput,
    pastInput: state.pastInput
  }
}

export default connect(mapStateToProps)(WordsContainer);
