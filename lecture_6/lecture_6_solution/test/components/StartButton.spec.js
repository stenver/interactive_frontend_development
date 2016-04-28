'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import StartButton from '../../js/components/StartButton';
import { wrapAndFindByTag } from '../Wrapper';

describe('StartButton', () => {

  it('displays start button if game not started', () => {
    let button = wrapAndFindByTag(
      <StartButton onStartClick={sinon.stub()} onEndClick={sinon.stub()} isStarted={false} />,
      'button'
    )
    expect(button.textContent).to.eq("Start game");
  });

  it("calls onStartClick when start button clicked", () => {
    let onStartClick = sinon.stub();
    let onEndClick = sinon.stub();

    let button = wrapAndFindByTag(
      <StartButton onStartClick={onStartClick} onEndClick={onEndClick} isStarted={false} />,
      'button'
    )

    TestUtils.Simulate.click(button);

    expect(onStartClick).to.have.been.calledOnce;
    expect(onEndClick).to.not.have.been.called;
  })

  it('displays end button if game is not started', () => {
    let button = wrapAndFindByTag(
      <StartButton onStartClick={sinon.stub()} onEndClick={sinon.stub()} isStarted={true} />,
      'button'
    )
    expect(button.textContent).to.eq("End game");
  });

  it('calls onEndClick when end button clicked', () => {
    let onStartClick = sinon.stub();
    let onEndClick = sinon.stub();

    let button = wrapAndFindByTag(
      <StartButton onStartClick={onStartClick} onEndClick={onEndClick} isStarted={true} />,
      'button'
    )

    TestUtils.Simulate.click(button);

    expect(onEndClick).to.have.been.calledOnce;
    expect(onStartClick).to.not.have.been.called;
  })
});
