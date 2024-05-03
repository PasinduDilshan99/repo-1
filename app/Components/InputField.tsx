import React from 'react';
import InfoIcon from '@mui/icons-material/Info';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null; // Error can be a string or null
}

const InputField: React.FC<InputFieldProps> = ({ label, value, onChange, error }) => {
  return (
    <div className="w-full mb-4 flex px-20">
      <div className='w-48 mr-4'>
        <label className="block text-gray-700">{label}</label>
      </div>
      <div className="flex items-center w-2/3"> {/* Adjusted width to fill the entire container */}
        <input
          className={`p-2 border rounde w-10/12 h-9 ${ /* Adjusted width to fill the entire container */
            error ? 'border-red-500 ' : 'border-gray-300'
          }`}
          type="text"
          value={value}
          onChange={onChange}
        />
        {error && <p className="text-red-500 text-sm w-40 p-1">{error}</p>}
        <InfoIcon className="ml-2 text-gray-500 hover:bg-neutral-300" />
      </div>
    </div>
  );
};

export default InputField;
