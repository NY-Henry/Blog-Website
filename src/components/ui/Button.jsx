import React from "react";

const Button = ({
  handleClick,
  title = "Button",
  bg = "bg-black",
  isDisabled = false,
}) => {
  return (
    <button
      onClick={handleClick}
      disabled={isDisabled}
      className={`my-2 rounded ${bg} px-4 py-2 font-bold text-white active:scale-95 disabled:cursor-not-allowed disabled:opacity-50`}
    >
      {title}
    </button>
  );
};

export default Button;
