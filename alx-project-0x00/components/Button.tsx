import React from 'react';

// Define the props for the Button component
interface ButtonProps {
  title: string;
  styles: string;
}

const Button: React.FC<ButtonProps> = ({ title, styles }) => {
  return (
    <button className={`px-4 py-2 font-semibold text-white transition-all duration-300 ${styles}`}>
      {title}
    </button>
  );
};

export default Button;
