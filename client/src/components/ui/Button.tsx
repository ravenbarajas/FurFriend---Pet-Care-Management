import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  onClick, 
  type = 'button',
  disabled = false 
}: ButtonProps) {
  const baseClasses = 'btn';
  const variantClasses = `btn--${variant}`;
  const sizeClasses = size !== 'md' ? `btn--${size}` : '';
  
  const classes = [baseClasses, variantClasses, sizeClasses, className].filter(Boolean).join(' ');

  return (
    <button 
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
