import Game from "./game";
import React from "react";
import Level2 from "./Level2";

function LevelOne(props) {
  // this is used to switch level 1 and level 2!!
  let [level2, setLevel2] = React.useState(false);
  function secondLevel() {
    setLevel2(true);
  }
  // this is the function that helps to come back to the starting page
  let Restart = props.Restart;
  function allowRestart() {
    return Restart();
  }
  // returning the level 1 game component if level 2 is'nt active
  return !level2 ? (
    <div className="level level-one">
      <h1> level 1</h1>
      <Game
        Level={() => secondLevel()}
        countDown={60}
        Restart={() => allowRestart()}
      />
    </div>
  ) : (
    <Level2 Restart={() => allowRestart()} Level={() => secondLevel()} />
  );
}
export default LevelOne;
