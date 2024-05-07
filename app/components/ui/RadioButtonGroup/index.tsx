import React from 'react';
import { RadioButtonProps } from './types';

const RadioButtonComp: React.FC<RadioButtonProps> = ({
  selectedValue,
  onSelect,
}) => {
  const options = [
    { label: 'Scala', value: 'scala' },
    { label: 'Python', value: 'python' },
    { label: 'JavaScript', value: 'javascript' },
  ];

  return (
    <div className="flex gap-5">
      {options.map((option, index) => (
        <label key={index} className="inline-flex items-center mt-2">
          <input
            type="radio"
            className="form-radio text-indigo-600 hover:cursor-pointer"
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onSelect(option.value)}
          />
          <span className="ml-2 hover:cursor-pointer">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default RadioButtonComp;
