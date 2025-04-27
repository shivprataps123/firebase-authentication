// src/components/Input.jsx
import React from "react";

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="border border-gray-300 p-2 rounded w-full mb-4"
      required
    />
  );
};

export default Input;
