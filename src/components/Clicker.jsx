import React from 'react'
import Upgrades from './Upgrades';
import data from '../upgrades'

export default function Clicker() {

  const upgradeElements = data.map(upgrade => {
    return <Upgrades 
      key={upgrade.id}
      upgrade={upgrade}
    />
  })

  const [clicks, setClicks] = React.useState(0)

  function increaseCount() {
    setClicks(prevCount => {
      return prevCount = prevCount + 1;
    })

    const showClicks = document.querySelector(".num-clicks");

    showClicks.classList.add("show");
  }

  return (
    <div className="clicker-container">
      <button onClick={increaseCount} className="clicker-btn">Click me</button>
      <p className="num-clicks">Number of clicks: <span id="num-clicks">{clicks}</span></p>
      <div className='upgrades'>
        {upgradeElements}
      </div>
    </div>
  );
}
