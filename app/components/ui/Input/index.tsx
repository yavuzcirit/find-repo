import React from 'react';
import { InputProps } from './types';


const Input: React.FC<InputProps> = ({ label, placeholder, value, type='text', className, onChange, ...props }) => {
  return (
    <div className="mb-4 flex flex-col w-[100%]">
      <label className="block text-white text-sm font-bold mb-2" htmlFor="input">
        {label}
      </label>
      <input
        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${className ?? ''}`}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Input;