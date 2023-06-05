import React from "react";
import colorNames from "colornames";

const Input = ({
  colorValue,
  setColorValue,
  hexValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        autoFocus
        required
        type="text"
        placeholder="Add color name"
        value={colorValue}
        className="textbox"
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      ></input>
      <button
        className="button"
        type="button"
        onClick={() => setIsDarkText(!isDarkText)}
      >
        Toggle Text Color
      </button>
    </form>
  );
};
export default Input;
