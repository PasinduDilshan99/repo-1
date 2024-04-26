'use client'

import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: "submit" | "reset" | "button"; // Define valid button types
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, type, children }) => {
  return (
    <button
      type={type}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
