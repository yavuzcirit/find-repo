export interface ButtonProps {
    name: string;
    disabled?: boolean;
    className?: string; 
    onClick: () => void;
  }