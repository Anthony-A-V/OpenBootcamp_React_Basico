import React, { useState } from "react";
import "./square.css";

const Square = () => {
  const [color, setColor] = useState({ backgroundColor: "black" });

  const changeColorIn = () => {
    let o = Math.round,
      r = Math.random,
      s = 255;
    let color =
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")";
    setColor({ backgroundColor: color });
  };

  const changeColorOut = () => {
    setColor({ backgroundColor: backgroundColor });
  };

  return (
    <div>
      <h2>Square CSS</h2>
      <div
        onMouseOver={changeColorIn}
        onMouseLeave={changeColorOut}
        onDoubleClick={changeColorOut}
        style={color}
        class="square"
      ></div>
    </div>
  );
};

export default Square;
