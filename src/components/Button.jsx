// src/components/Button.jsx
import React from "react";

const Button = ({ children, onClick, type = "button", disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
    >
      {children}
    </button>
  );
};

export default Button;
