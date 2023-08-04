import React from "react";

const ColorBox = ({ color, hexValue, isDarkText }) => {
  const boxStyle = {
    backgroundColor: color,
    color: isDarkText ? "#000" : "#FFF",
  };

  return (
    <div className="colorBox" style={boxStyle}>
      <p>{color}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

// Setting default state for color
ColorBox.defaultProps = {
  color: "white",
};

export default ColorBox;

// This component receives the color value as a prop (color) and uses it to set the background color of the div. It displays the color value in the p tag inside the div.
