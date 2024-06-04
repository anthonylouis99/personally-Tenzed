import React from "react";
import Game from "./game";
import Level3 from "./Level3";

function Level2(props) {
  let [level3, setLevel3] = React.useState(false);
  let allowRestart = props.Restart;
  function bossLevel() {
    return setLevel3(true);
  }

  let NextLevel = props.Level;

  return !level3 ? (
    <div className="level Level-Two">
      <h1> Level2</h1>
      <Game
        Restart={() => allowRestart()}
        SecondLevel={() => NextLevel()}
        Level={() => bossLevel()}
        countDown={40}
      />
    </div>
  ) : (
    <Level3 Restart={() => allowRestart()} BossLevel={() => bossLevel()} />
  );
}
export default Level2;
