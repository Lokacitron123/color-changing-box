import React, { useState } from "react";
import colorNames from "colornames"; // translates a value to a hex value, letting us set a hexValue state

const ColorInput = ({
  onColorChange,
  setHexValue,
  defaultColor,
  isDarkText,
  setIsDarkText,
}) => {
  const [colorValue, setColorValue] = useState("");

  const handleInputChange = (e) => {
    const newColorValue = e.target.value;
    setColorValue(newColorValue);

    if (newColorValue) {
      onColorChange(newColorValue);
      setHexValue(colorNames(newColorValue));
    } else {
      onColorChange(defaultColor); // Revert to default color
      setHexValue("");
    }
  };

  return (
    <form className="colorInput">
      <input
        autoFocus
        type="text"
        required
        value={colorValue}
        onChange={(e) => handleInputChange(e)}
        placeholder="Enter a color to change the color of the box above"
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default ColorInput;

// This component renders an input field where you can enter color values. When the input value changes, it calls the handleInputChange function to update the local state colorValue and also notifies the parent component (App) about the color change using the onColorChange prop.
