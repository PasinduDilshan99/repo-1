'use client'
import React from 'react'
interface InputFieldProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null; // Error can be a string or null
  }
  const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, error }) => {
    return (
      <div className="mb-4">
        <label className="block text-gray-700">{label}</label>
        <input
          className={`mt-1 p-2 border rounded ${
            error ? 'border-red-500' : 'border-gray-300'
          }`}
          type="text"
          value={value}
          onChange={onChange}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    );
  };

export default InputField