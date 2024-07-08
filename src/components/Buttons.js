import React from "react";

const Buttons = ({ className, children, mode, onClick }) => {

  const light = "bg-white text-[#e83417] hover:bg-[#fef9f9] duration-300";
  const dark = "bg-[#e83417] text-white hover:bg-red-700 duration-300";
  const modeStyle = () => {
    if (mode === "light") {
      return light;
    } else if (mode === "dark") {
      return dark;
    } else {
      return null;
    }
  };

  const classes = `py-2 px-4 border rounded-md shadow-md font-semibold ${className} ${modeStyle()}`;
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span>{children}</span>
    </button>
  );
  return renderButton();
};

export default Buttons;
