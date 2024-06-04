import React from "react";

function Dices(props) {
  let styles = {
    backgroundColor: props.isHeld && "green",
  };

  function dies() {
    if (props.value === 1) {
      return <div className="die"></div>;
    } else if (props.value === 2) {
      return (
        <>
          <div className="die"></div>
          <div className="die"></div>
        </>
      );
    } else if (props.value === 3) {
      return (
        <>
          <div className="die"></div>
          <div className="die"></div>
          <div className="die"></div>
        </>
      );
    } else if (props.value === 4) {
      return (
        <div className="four">
          <div className="die"></div>
          <div className="die"></div>
          <div className="die"></div>
          <div className="die"></div>
        </div>
      );
    } else if (props.value === 5) {
      return (
        <div className="five">
          <div className="die"></div>
          <div className="die"></div>
          <div className="mid">
            <div className="die"></div>
          </div>
          <div className="die"></div>
          <div className="die"></div>
        </div>
      );
    } else if (props.value === 6) {
      return (
        <>
          <div className="die"></div>
          <div className="die"></div>
          <div className="die"></div>
          <div className="die"></div>
          <div className="die"></div>
          <div className="die"></div>
        </>
      );
    }
  }
  let value = dies();

  return (
    <div style={styles} onClick={props.handelClick} className="dices">
      {value}
    </div>
  );
}

export default Dices;

// function displayDies() {
//   let dices = [];
//   for (let index = 1; index < 7; index++) {
//     dices.push(
//       <div className="holder">
//         <div className="die" key={index}></div>
//       </div>
//     );
//   }
//   return dices;
// }
// let dices = displayDies();
