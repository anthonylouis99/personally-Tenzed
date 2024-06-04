import React from "react";
import Dices from "./dices";
import { nanoid } from "nanoid";
import Button from "../button";
import Timer from "../Timer";

function Game(props) {
  let [dices, setDices] = React.useState(dieArray());
  let [time, setTime] = React.useState(props.countDown);
  let [running, setRunning] = React.useState(true);
  let [levelFinished, setLevelFinished] = React.useState(false);
  let [gameOver, setGameOver] = React.useState(false);
  let NextLevel = props.Level;
  let RestartGame = props.Restart;
  let secondLevel = props.SecondLevel;
  let BossLevel = props.BossLevel;
  let EndGame = props.EndGame;

  // this useEffect is for the timer !!
  React.useEffect(() => {
    let intervalId;
    if (running && time > 0) {
      intervalId = setInterval(() => setTime(time - 1), 1000);
    } else {
      setTime("time up");
      setRunning(false);
    }

    return () => clearInterval(intervalId);
  }, [time, running]);

  // this useEffect is used to know if the game is won !!

  React.useEffect(() => {
    let isHeldTrue = dices.every((die) => die.isHeld);
    let singleDie = dices.every((die) => die.value === dices[7].value);
    if (isHeldTrue && singleDie) {
      setLevelFinished(true);
      setRunning(false);
      BossLevel ? setTime("Game complete") : setTime("level Cleared");
      BossLevel ? EndGame() : setTime("Next level");
    } else if (time === 0 && !levelFinished) {
      setGameOver(true);
    }
  }, [levelFinished, dices, time, running, BossLevel, EndGame]);

  // the Re-usable button style!!
  function switchColor() {
    return secondLevel ? "violet" : BossLevel ? "green" : "blue";
  }
  let buttonStyle = {
    backgroundColor: switchColor(),
  };
  // this function returns a new die!!
  function newDice() {
    return {
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
      id: nanoid(),
    };
  }
  // this function crates 10 new dices which are mapped over and are used to create 10 die component!!
  function dieArray() {
    let dicesArray = [];
    for (let index = 0; index < 10; index++) {
      dicesArray.push(newDice());
    }
    return dicesArray;
  }

  // this function changes the isheld property of a die when it is clicked!!

  function handelClick(id) {
    setDices((prvDie) => {
      return prvDie.map((die) => {
        return die.id === id
          ? { value: die.value, isHeld: !die.isHeld, id: die.id }
          : die;
      });
    });
  }
  // this function gives the effect of rolling the dices when the Roll button is clicked,
  // mean while its just changing the states of the dices that aren't clicked on yet to a different new die!!
  function buttonClick() {
    !levelFinished
      ? setDices((prvDie) => {
          return prvDie.map((die) => {
            return !die.isHeld ? newDice() : die;
          });
        })
      : NextLevel();
  }
  // this displays the dices component on the screen!!
  let displayDies = dices.map((die) => (
    <Dices
      key={nanoid()}
      value={die.value}
      isHeld={die.isHeld}
      id={nanoid()}
      handelClick={() => !gameOver && handelClick(die.id)}
    />
  ));
  // this function restarts the game from the same level!!
  function restart() {
    setGameOver((prv) => !prv);
    setTime(props.countDown);
    setRunning(true);
    setDices(dieArray());
  }

  return (
    <>
      <Timer value={time} />
      <div className="dices-container"> {displayDies}</div>
      {!gameOver ? (
        <Button
          style={buttonStyle}
          value={
            !levelFinished ? "Roll" : EndGame ? "Restart Game" : "Next-Level"
          }
          onClickFunction={() =>
            !levelFinished
              ? buttonClick()
              : BossLevel && EndGame
              ? RestartGame()
              : NextLevel()
          }
        />
      ) : (
        <div className="Two-Buttons">
          <Button
            style={buttonStyle}
            value={"Restart level"}
            onClickFunction={() => restart()}
          />

          <Button
            style={buttonStyle}
            value={"Restart Game"}
            onClickFunction={() => RestartGame()}
          />
        </div>
      )}
    </>
  );
}

export default Game;
