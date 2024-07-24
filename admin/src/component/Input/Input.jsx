import React from "react";
import "./Input.css";

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  min,
  max,
  name,
  className,
  required,
  readOnly,
  spellCheck,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      min={min}
      max={max}
      name={name}
      className={className}
      required={required}
      readOnly={readOnly}
      spellCheck={spellCheck}
    />
  );
};

export default Input;
