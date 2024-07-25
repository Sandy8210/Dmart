import React from "react";
import "./Button.css";

const Button = ({ type, label, onClick, className }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {label}
    </button>
  );
};

export default Button;
