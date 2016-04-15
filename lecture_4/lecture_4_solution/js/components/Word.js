import React from "react";
import Letter from "../components/Letter";

const Word = (props) => {
  const buildLetters = () => {
    if (props.isCurrentInput) {
      let letters = [];
      for(var i = 0; i < props.letters.length; i++) {
        let letter = props.letters[i]
        let color = "none"
        if (i < props.currentInput.length){
          color = (props.currentInput[i] == letter ? "green" : "red")
        }
        letters.push(<Letter key={i} color={color} letter={letter} />)
      };
      return letters;
    }else{
      return props.letters;
    }
  };

  return(
    <div className={"word "+ props.color} >{buildLetters()}</div>
  );
};
Word.propTypes = {
  isCurrentInput: React.PropTypes.bool.isRequired,
  currentInput: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
  letters: React.PropTypes.string.isRequired
};

export { Word as default };
