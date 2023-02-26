import React, { useState } from "react";
import "./square.css";

const Square = () => {
  const [color, setColor] = useState("black");
  const [manageInterval, setManageInterval] = useState(0);

  function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r, g, b];
  }

  function randomHexColor() {
    let [r, g, b] = randomRgbColor();

    let hr = r.toString(16).padStart(2, "0");
    let hg = g.toString(16).padStart(2, "0");
    let hb = b.toString(16).padStart(2, "0");

    return "#" + hr + hg + hb;
  }

  const changeColorIn = () => {
    return setManageInterval(
      setInterval(() => {
        setColor(randomHexColor);
      }, 500)
    );
  };

  const changeColorOut = () => {
    return clearInterval(manageInterval);
  };

  return (
    <div>
      <h2>Square CSS</h2>
      <div
        onMouseOver={changeColorIn}
        onMouseLeave={changeColorOut}
        onDoubleClick={changeColorOut}
        style={{ backgroundColor: color }}
        className="square"
      ></div>
      <p style={{ color: "black" }}>Color: {color} </p>
    </div>
  );
};

export default Square;
