import React, { Component, PropTypes } from 'react'

const Counter = (props) => {
  const { value, onIncrement, onDecrement } = props
  return (
    <p>
      Clicked: {value} times
      {' '}
      <button onClick={onIncrement}>
        +
      </button>
      {' '}
      <button onClick={onDecrement}>
        -
      </button>
    </p>
  )
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
}

export { Counter as default }

