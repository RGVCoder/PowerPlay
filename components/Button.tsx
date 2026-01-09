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
  const baseStyles = "font-display font-semibold tracking-wide py-3 px-8 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-coral focus:ring-opacity-50 relative overflow-hidden group";

  const variants = {
    primary: "bg-coral hover:bg-coral-dark text-white shadow-lg shadow-coral/20 hover:shadow-xl hover:shadow-coral/30 border border-transparent",
    secondary: "bg-cream-sand text-charcoal hover:bg-cream-dark border border-charcoal/10 hover:border-charcoal/20 backdrop-blur-sm",
    outline: "bg-transparent border-2 border-coral text-coral hover:bg-coral hover:text-white",
    text: "bg-transparent text-coral hover:text-coral-dark px-0 py-2 hover:translate-y-0 rounded-none",
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