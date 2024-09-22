import React from 'react';

interface ButtonProps {
  message: string;
  variant: "normal" | "bordered";
  onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ message, variant = "normal", onClick }) => {
  const baseClasses = "flex shadow-sm items-center justify-center text-md py-2 px-3 rounded-lg font-regular transition-all duration-300 ease-in-out";
  const normalClasses = `hover:bg-border bg-border-secondary text-foreground ${baseClasses}`;
  const borderedClasses = `border-[2px] hover:bg-border-secondary  border-border-secondary bg-transparent text-white ${baseClasses}`;

  return (
    <button className={variant === "bordered" ? borderedClasses : normalClasses} onClick={onClick}>
      {message}
    </button>
  );
};

export default Button;
