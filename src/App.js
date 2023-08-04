import React, { useState } from "react";
import ColorBox from "./ColorBox";
import ColorInput from "./ColorInput";
import colorNames from "colornames";

function App() {
  const defaultColor = "white"; // Define the default color here

  const [currentColor, setCurrentColor] = useState(defaultColor);
  const [hexValue, setHexValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  const handleColorChange = (newColor) => {
    setCurrentColor(newColor);

    if (newColor) {
      setHexValue(colorNames(newColor));
    } else {
      setHexValue("");
    }
  };

  return (
    <main>
      <ColorBox
        color={currentColor}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <ColorInput
        onColorChange={handleColorChange}
        setHexValue={setHexValue}
        defaultColor={defaultColor}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </main>
  );
}

export default App;
