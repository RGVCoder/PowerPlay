import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  fullWidth = false,
  className = '',
  ...props
}) => {
  const baseStyles = "font-display font-semibold tracking-wide py-3 px-8 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-orange-cortex focus:ring-opacity-50 relative overflow-hidden group";

  const variants = {
    primary: "bg-orange-cortex hover:bg-orange-cortex text-white shadow-lg shadow-orange-cortex/20 hover:shadow-xl hover:shadow-orange-cortex/30 border border-transparent",
    secondary: "bg-black/5 text-black-cortex hover:bg-black/10 border border-black-cortex/10 hover:border-black-cortex/20 backdrop-blur-sm",
    outline: "bg-transparent border-2 border-orange-cortex text-orange-cortex hover:bg-orange-cortex hover:text-white",
    text: "bg-transparent text-orange-cortex hover:text-orange-cortex px-0 py-2 hover:translate-y-0 rounded-none",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};