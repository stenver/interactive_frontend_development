import React from "react";

const KeyPressListener = React.createClass({
  componentDidMount() {
    window.addEventListener('keypress', this.handleKeyPress)
  },
  componentWillUnmount() {
    window.removeEventListener('keypress', this.handleKeyPress)
  },
  handleKeyPress(event){
    const charString = String.fromCharCode(event.keyCode)
    this.props.handleKeyPress(charString)
  },
  render(){
    return <span />;
  }
})

KeyPressListener.propTypes = {
  handleKeyPress: React.PropTypes.func.isRequired
}

export default KeyPressListener;
