import React from "react";

const Button = ({ label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`rounded-full text-white py-2 bg-indigo-500 hover:ring-2 hover:ring-indigo-400 hover:bg-indigo-700 active:bg-indigo-700 active:ring-indigo-700 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
