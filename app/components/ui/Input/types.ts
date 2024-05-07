import { ChangeEvent } from 'react'

export interface InputProps {
    label?: string;
    placeholder: string;
    value: string;
    type?: string;
    className?: string; 
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  }