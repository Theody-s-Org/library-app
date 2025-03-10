import React from "react";

const Button = (props) => {
  return (
    <button
      className="h-12 bg-green-500 px-6 py-4 ml-5"
      style={{ color: props.color }}
    >
      {props.children}
      {props.text}
    </button>
  );
};

export default Button;
