import React from 'react';

const Button = ({ onClick, children, variant = 'primary', disabled = false, ...props }) => {
  const styles = {
    button: {
      padding: '8px 16px',
      borderRadius: '4px',
      border: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      fontSize: '14px',
      fontWeight: '500',
      ...(variant === 'primary' ? {
        backgroundColor: '#1976d2',
        color: 'white',
        '&:hover': {
          backgroundColor: '#1565c0'
        }
      } : {
        backgroundColor: '#e0e0e0',
        color: 'black',
        '&:hover': {
          backgroundColor: '#bdbdbd'
        }
      }),
      opacity: disabled ? 0.6 : 1
    }
  };

  return (
    <button
      style={styles.button}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;