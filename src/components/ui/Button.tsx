import React from 'react';
const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const variantClasses = {
    primary: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    secondary: 'bg-blue-500 hover:bg-blue-600 text-white',
    outline: 'bg-white border border-gray-300 hover:bg-gray-50 text-gray-700',
    ghost: 'hover:bg-gray-100 text-gray-700',
    link: 'text-emerald-600 hover:underline',
    coral: 'bg-coral-500 hover:bg-coral-600 text-white'
  };
  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1.5 rounded-lg',
    md: 'text-sm px-4 py-2 rounded-lg',
    lg: 'text-base px-5 py-2.5 rounded-xl'
  };
  return <button className={`font-medium transition-colors duration-200 flex items-center justify-center ${variantClasses[variant]} ${sizeClasses[size]} ${className}`} {...props}>
      {children}
    </button>;
};
export default Button;