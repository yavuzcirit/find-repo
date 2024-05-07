import React, { useState, useEffect } from 'react';
import { RadioButtonGroup } from '@/app/components/ui';
import { useData } from '@/app/utils/store/useData';

const RadioButtonComp: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState<string>(
    typeof window !== 'undefined' && localStorage.getItem('selectedValue') || 'javascript'
  );
  const { setQuery } = useData();

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    setQuery(value);
  };

  // Save selectedValue to localStorage whenever it changes
  useEffect(() => {
    typeof window !== 'undefined' && localStorage.setItem('selectedValue', selectedValue);
  }, [selectedValue]);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-800 text-white">
      <h2 className="text-2xl font-bold mb-4">Choose a language:</h2>
      <RadioButtonGroup selectedValue={selectedValue} onSelect={handleSelect} />
    </div>
  );
};

export default RadioButtonComp;
