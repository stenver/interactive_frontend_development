import React from "react";
import { getCurrentTime } from '../reducers';
import R from 'ramda'

const TickingContainer = React.createClass({
  getDefaultProps() {
    return { interval: 1000 }
  },

  componentDidMount(){
    this.interval = setInterval(this.update, this.props.interval);
  },

  componentWillUnmount() {
    clearInterval(this.interval);
  },

  update() {
    this.forceUpdate()
  },

  render() {
    const currentTime = getCurrentTime()
    return React.createElement(this.props.component, {currentTime})
  }
});

TickingContainer.propTypes = {
  interval: React.PropTypes.number
}

export default TickingContainer
