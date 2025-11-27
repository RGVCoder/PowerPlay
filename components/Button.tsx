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
  const baseStyles = "font-display font-semibold tracking-wide py-3 px-8 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-1 focus:ring-gold focus:ring-opacity-50 relative overflow-hidden group";
  
  const variants = {
    primary: "bg-gold hover:bg-gold-light text-black shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] border border-transparent rounded-full",
    secondary: "bg-white/5 text-white hover:bg-white/10 border border-white/10 hover:border-white/20 backdrop-blur-sm rounded-full",
    outline: "bg-transparent border border-gold/50 text-gold hover:bg-gold hover:text-black hover:border-gold rounded-full",
    text: "bg-transparent text-gold hover:text-gold-light px-0 py-2 hover:translate-y-0 rounded-none",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full rounded-lg' : ''} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};