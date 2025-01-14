import React from 'react'

export default function Clicker() {

  const [counter, setCounter] = React.useState(0)

  function increaseCount() {
    setCounter(prevCount => {
      return prevCount = prevCount + 1;
    })
  }

  return (
    <div className="clicker-container">
      <button onClick={increaseCount} className="clicker-btn">Click me</button>
      <p>Number of clicks: <span id="num-clicks">{counter}</span></p>
      <div className='upgrades'>
        <button>DVD</button>
        <button>Sometihng else</button>
        <button>Lorem Ipsum</button>
      </div>
    </div>
  );
}
