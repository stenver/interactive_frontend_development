'use strict';

import React from 'react';
import TestUtils from 'react-addons-test-utils';
import Remote from '../../js/components/Remote';
import RemoteWordsContainer from "../../js/containers/RemoteWordsContainer";
import RemoteStatsContainer from "../../js/containers/RemoteStatsContainer";

describe('Remote', () => {

  var buildSpeedTyper = (({opponentPresent}) => {
    let renderer = TestUtils.createRenderer();
    renderer.render( <Remote opponentPresent={opponentPresent}/>);
    return renderer.getRenderOutput();
  });

  it('renders empty span when opponent not present', () => {
    let speedTyper = buildSpeedTyper({opponentPresent: false});
    expect(speedTyper.type).to.eq('span')
    expect(speedTyper.props.children).to.be.empty
  })

  it('renders Remote Player header', () => {
    let speedTyper = buildSpeedTyper({opponentPresent: true});
    let header = speedTyper.props.children[0]
    expect(header.type).to.eq('h2')
    expect(header.props.children).to.eq('Remote Player')
  });

  it('renders remote words container', () => {
    let speedTyper = buildSpeedTyper({opponentPresent: true});
    let remoteWordsContainer = speedTyper.props.children[1]
    expect(remoteWordsContainer.type).to.eq(RemoteWordsContainer);
  });

  it('renders remote stats container', () => {
    let speedTyper = buildSpeedTyper({opponentPresent: true});
    let remoteStatsContainer = speedTyper.props.children[2]
    expect(remoteStatsContainer.type).to.eq(RemoteStatsContainer);
  });
});
