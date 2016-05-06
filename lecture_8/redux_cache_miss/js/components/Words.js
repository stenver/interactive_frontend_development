import React from 'react';
import R from 'ramda'
import PastWords from "../containers/words/PastWordsContainer"
import CurrentWords from "../containers/words/CurrentWordContainer"
import NextWords from "../containers/words/NextWordsContainer"


const Words = (props) => {
  return(
    <div className="words-outer">
      <div className="words">
        <PastWords />
        <CurrentWords />
        <NextWords />
      </div>
    </div>
  );
};

export { Words as default };
