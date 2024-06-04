import Button from "./button";

function StarterPage(props) {
  let functionLevel1 = props.firstLevel;
  function handelClick() {
    return functionLevel1();
  }
  return (
    <div className="Starting-page">
      <h1>Personally Tenzed</h1>
      <div className="instructions">
        <h4>Instructions</h4>
        <p>
          This is a tenzes game, and this game consists of three levels, levels
          <strong> ONE,TWO,THREE.</strong>
        </p>

        <h4>How to play:</h4>
        <p>
          On the start of the game, a player must select a die number by
          clicking on said die <br />
          and has to keep rolling and selecting every other dices till all ten
          dices are selected. <br />
          All selected dices must be the same for the user to be granted access
          to the next level
        </p>
        <h3>Warning:</h3>
        <ul>
          <li>Finish each level before time runs out.</li>
          <li>
            When the Game starts, it cant be stopped till all three levels are
            cleared,
            <br />
            however the rest time comes after a level is cleared.
          </li>
          <li>
            when time runs out, a player can choose to restart the same level or
            restart the game
          </li>
          <li>The higher the level, the lower the time</li>
          <li>
            Start the game when your ready by clicking on the start Game button
            below
          </li>
        </ul>
      </div>
      <Button onClickFunction={() => handelClick()} value={"Start Game"} />
    </div>
  );
}

export default StarterPage;
