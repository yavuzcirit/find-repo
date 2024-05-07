import React from "react";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ name, className, disabled = false, onClick }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-2 bg-blue-500 text-white rounded-md ${
        disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
      } ${className ?? ''}`}
    >
      {name}
    </button>
  );
};

export default Button;
