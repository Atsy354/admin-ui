import React from "react";

function Input(props) {
  const {
    type = "text",
    placeholder = "",
    value,
    onChange,
    className = "",
  } = props;

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full rounded-md border border-gray-05 bg-white px-3 py-2 text-sm text-defaultBlack outline-none focus:border-primary ${className}`}
    />
  );
}

export default Input;