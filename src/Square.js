import React from "react";

const Square = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <div
      className="container"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </div>
  );
};

export default Square;
