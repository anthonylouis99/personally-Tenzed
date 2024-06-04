import "./App.css";
import React from "react";
import StarterPage from "./start-page";
import LevelOne from "./gameLevels/Level1";

function App() {
  // used this to switch this between starting page and level 1 !!
  let [level1, setLevel1] = React.useState(false);

  function firstLevel() {
    return setLevel1((prvLevel) => !prvLevel);
  }

  return !level1 ? (
    // here is the logic
    <StarterPage firstLevel={firstLevel} />
  ) : (
    <LevelOne Restart={() => firstLevel()} />
  );
}

export default App;
