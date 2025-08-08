import React from 'react';
export const Card = ({
  className = '',
  children,
  ...props
}) => {
  return <div className={`bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden ${className}`} {...props}>
      {children}
    </div>;
};
export const CardHeader = ({
  className = '',
  children,
  ...props
}) => {
  return <div className={`p-4 border-b border-gray-100 ${className}`} {...props}>
      {children}
    </div>;
};
export const CardContent = ({
  className = '',
  children,
  ...props
}) => {
  return <div className={`p-4 ${className}`} {...props}>
      {children}
    </div>;
};
export const CardFooter = ({
  className = '',
  children,
  ...props
}) => {
  return <div className={`p-4 border-t border-gray-100 ${className}`} {...props}>
      {children}
    </div>;
};