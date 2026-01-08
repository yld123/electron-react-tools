import React from 'react';

const Button = ({ onClick, children, variant = 'primary', size = 'medium', disabled = false, ...props }) => {
  // 大小配置
  const sizeStyles = {
    small: {
      padding: '6px 12px',
      fontSize: '12px'
    },
    medium: {
      padding: '8px 16px',
      fontSize: '14px'
    },
    large: {
      padding: '12px 24px',
      fontSize: '16px'
    }
  };

  // 变体配置
  const variantStyles = {
    primary: {
      backgroundColor: '#1976d2',
      color: 'white',
      boxShadow: '0 2px 4px rgba(25, 118, 210, 0.2)',
      '&:hover': {
        backgroundColor: '#1565c0',
        boxShadow: '0 4px 8px rgba(25, 118, 210, 0.3)'
      },
      '&:active': {
        backgroundColor: '#0d47a1',
        boxShadow: '0 2px 4px rgba(25, 118, 210, 0.4)'
      }
    },
    secondary: {
      backgroundColor: '#6c757d',
      color: 'white',
      boxShadow: '0 2px 4px rgba(108, 117, 125, 0.2)',
      '&:hover': {
        backgroundColor: '#5a6268',
        boxShadow: '0 4px 8px rgba(108, 117, 125, 0.3)'
      },
      '&:active': {
        backgroundColor: '#495057',
        boxShadow: '0 2px 4px rgba(108, 117, 125, 0.4)'
      }
    },
    success: {
      backgroundColor: '#28a745',
      color: 'white',
      boxShadow: '0 2px 4px rgba(40, 167, 69, 0.2)',
      '&:hover': {
        backgroundColor: '#218838',
        boxShadow: '0 4px 8px rgba(40, 167, 69, 0.3)'
      },
      '&:active': {
        backgroundColor: '#1e7e34',
        boxShadow: '0 2px 4px rgba(40, 167, 69, 0.4)'
      }
    },
    danger: {
      backgroundColor: '#dc3545',
      color: 'white',
      boxShadow: '0 2px 4px rgba(220, 53, 69, 0.2)',
      '&:hover': {
        backgroundColor: '#c82333',
        boxShadow: '0 4px 8px rgba(220, 53, 69, 0.3)'
      },
      '&:active': {
        backgroundColor: '#a71d2a',
        boxShadow: '0 2px 4px rgba(220, 53, 69, 0.4)'
      }
    },
    warning: {
      backgroundColor: '#ffc107',
      color: '#212529',
      boxShadow: '0 2px 4px rgba(255, 193, 7, 0.2)',
      '&:hover': {
        backgroundColor: '#e0a800',
        boxShadow: '0 4px 8px rgba(255, 193, 7, 0.3)'
      },
      '&:active': {
        backgroundColor: '#d39e00',
        boxShadow: '0 2px 4px rgba(255, 193, 7, 0.4)'
      }
    },
    info: {
      backgroundColor: '#17a2b8',
      color: 'white',
      boxShadow: '0 2px 4px rgba(23, 162, 184, 0.2)',
      '&:hover': {
        backgroundColor: '#138496',
        boxShadow: '0 4px 8px rgba(23, 162, 184, 0.3)'
      },
      '&:active': {
        backgroundColor: '#117a8b',
        boxShadow: '0 2px 4px rgba(23, 162, 184, 0.4)'
      }
    },
    light: {
      backgroundColor: '#f8f9fa',
      color: '#212529',
      boxShadow: '0 2px 4px rgba(248, 249, 250, 0.3)',
      border: '1px solid #dee2e6',
      '&:hover': {
        backgroundColor: '#e9ecef',
        boxShadow: '0 4px 8px rgba(248, 249, 250, 0.4)'
      },
      '&:active': {
        backgroundColor: '#dee2e6',
        boxShadow: '0 2px 4px rgba(248, 249, 250, 0.5)'
      }
    },
    dark: {
      backgroundColor: '#343a40',
      color: 'white',
      boxShadow: '0 2px 4px rgba(52, 58, 64, 0.2)',
      '&:hover': {
        backgroundColor: '#23272b',
        boxShadow: '0 4px 8px rgba(52, 58, 64, 0.3)'
      },
      '&:active': {
        backgroundColor: '#1d2124',
        boxShadow: '0 2px 4px rgba(52, 58, 64, 0.4)'
      }
    }
  };

  // 基础样式
  const baseStyle = {
    border: 'none',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: '500',
    outline: 'none',
    transition: 'all 0.3s ease',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    userSelect: 'none',
    whiteSpace: 'nowrap',
    ...sizeStyles[size],
    ...variantStyles[variant] || variantStyles.primary,
    opacity: disabled ? 0.6 : 1,
    transform: disabled ? 'none' : 'translateY(0)',
    '&:active:not(:disabled)': {
      transform: 'translateY(1px)'
    }
  };

  return (
    <button
      style={baseStyle}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;