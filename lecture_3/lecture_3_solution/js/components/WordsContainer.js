import React from 'react';
import Words from "./Words";
import Word from "./Word";
import Letter from "./Letter";

var WordsContainer = React.createClass({
  propTypes: {
    words: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
    currentInput: React.PropTypes.string.isRequired,
    pastInput: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
  },

  buildLetters: function(word) {
    let letters = [];
    for(var i = 0; i < word.length; i++) {
      let letter = word[i]
      let color = "none"
      if (i < this.props.currentInput.length){
        color = (this.props.currentInput[i] == letter ? "green" : "red")
      }
      letters.push(<Letter key={i} color={color}>{letter}</Letter>)
    };
    return letters;
  },

  buildWords: function() {
    let childNodes = [];
    this.props.words.forEach((word, index) => {
      let letters = word;
      let color = "none"
      if (index === this.props.pastInput.length) {
        letters = this.buildLetters(word);
      } else if (index < this.props.pastInput.length) {
        color = (this.props.pastInput[index] === word ? "green" : "red" )
      }
      childNodes.push(<Word color={color} key={word} >{letters}</Word>)
    });
    return childNodes;
  },

  render: function() {
    return(
      <Words>
        {this.buildWords()}
      </Words>
    );
  }
});

export { WordsContainer as default };
