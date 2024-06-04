import React from "react";
import Game from "./game";
import Confetti from "react-confetti";

function Level3(props) {
  let [GameFinished, setGameFinished] = React.useState(false);
  let allowRestart = props.Restart;
  function endGame() {
    setGameFinished(true);
  }

  let BossLevel = props.BossLevel;

  return (
    <div className="level Level-three">
      {GameFinished && <Confetti />}
      <h1>Final Level</h1>
      <Game
        Restart={() => allowRestart()}
        EndGame={() => endGame()}
        countDown={30}
        BossLevel={() => BossLevel()}
      />
    </div>
  );
}

export default Level3;
