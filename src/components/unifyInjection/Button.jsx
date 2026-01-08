import React from 'react';

const Button = ({ onClick, children, variant = 'primary', size = 'medium', disabled = false, className = '', ...props }) => {
  // 大小类
  const sizeClasses = {
    small: 'px-3 py-1 text-xs',
    medium: 'px-4 py-2 text-sm',
    large: 'px-6 py-3 text-base'
  };

  // 变体类
  const variantClasses = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg',
    secondary: 'bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg',
    success: 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg',
    danger: 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg',
    warning: 'bg-yellow-500 hover:bg-yellow-600 text-gray-900 shadow-md hover:shadow-lg',
    info: 'bg-cyan-600 hover:bg-cyan-700 text-white shadow-md hover:shadow-lg',
    light: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border border-gray-300 shadow-sm hover:shadow-md',
    dark: 'bg-gray-800 hover:bg-gray-900 text-white shadow-md hover:shadow-lg'
  };

  // 基础类和状态类
  const baseClasses = 'rounded-lg font-medium outline-none transition-all duration-300 inline-flex items-center justify-center text-center text-decoration-none user-select-none whitespace-nowrap';
  const stateClasses = disabled 
    ? 'opacity-60 cursor-not-allowed transform-none' 
    : 'cursor-pointer hover:-translate-y-0.5 active:translate-y-0 active:shadow-sm';

  // 组合所有类
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${stateClasses} ${className}`;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;