export default function Upgrades({ upgrade }) {

  function showUpgrades() {
    const showUpgradeDescription = document.querySelector(".upgrade-desc");
    showUpgradeDescription.classList.add("show");
  }

  return (
    <div className="upgrade">
      <button className="upgrade-btns"><img className="upgrade-imgs" src={upgrade.img} alt="DVD logo"/></button>
      <div className="upgrade-desc">
        <p>{upgrade.name}</p>
        <p>{upgrade.description}</p>
        <p className="cost">Cost: {upgrade.cost}</p>
      </div>
    </div>
  );
}
