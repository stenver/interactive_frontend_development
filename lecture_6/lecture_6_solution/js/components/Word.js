import React from "react";
import Letter from "../components/Letter";

const Word = (props) => {
  const buildLetters = () => {
    if (props.isCurrentInput) {
      return props.letters.split('').map((letter, index) => {
        let color = "none";
        if (index < props.currentInput.length){
          color = (props.currentInput[index] == letter ? "green" : "red")
        }
        return <Letter key={index} color={color} letter={letter} />
      })
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
