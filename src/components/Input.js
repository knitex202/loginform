import React from "react";

const Input = ({
  children,
  type,
  value,
  onClick,
  onChange,
  max,
  min,
  required,
  focusColor,
}) => {
    const colors = [
        {red: "#e83417"},
        {blue: "#1e90ff"},
        {green: "#008000"},
        {yellow: "#ffff00"},
        {black: "#000000"},
        {white: "#ffffff"},
        {purple: "#800080"},
        {orange: "#ffa500"},
        {pink: "#ffc0cb"},
        {brown: "#a52a2a"},
        {gray: "#808080"},
        {cyan: "#00ffff"},
        {magenta: "#ff00ff"},
        {olive: "#808000"},
    ]
    
  

  const classes = `w-96 mt-4 border border-gray-300 rounded-lg py-4 px-2  focus:outline-${focusColor} `;
  // color #e83417
  const inputRender = () => (
    <input
      className={classes}
      type={type}
      onChange={onChange}
      onClick={onClick}
      name={children}
      value={value}
      min={min}
      max={max}
      required={required}
      placeholder={children}
    />
  );
  return inputRender();
};

export default Input;
