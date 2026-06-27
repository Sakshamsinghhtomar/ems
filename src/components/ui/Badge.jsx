import React from 'react'

const Badge = ({ children, variant = 'default', className = '' }) => {
  const baseStyle = 'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border transition-colors duration-150'

  const variantStyles = {
    default: {
      backgroundColor: '#161B22',
      color: '#8B949E',
      border: '1px solid #30363D',
    },
    primary: {
      backgroundColor: '#161B22',
      color: '#58A6FF',
      border: '1px solid #1F6FEB',
    },
    success: {
      backgroundColor: '#161B22',
      color: '#3FB950',
      border: '1px solid #2EA043',
    },
    warning: {
      backgroundColor: '#161B22',
      color: '#D29922',
      border: '1px solid #9E6A03',
    },
    danger: {
      backgroundColor: '#161B22',
      color: '#DA3633',
      border: '1px solid #B91C1C',
    },
    info: {
      backgroundColor: '#161B22',
      color: '#58A6FF',
      border: '1px solid #30363D',
    },
  }

  return (
    <span
      className={`${baseStyle} ${className}`}
      style={variantStyles[variant] || variantStyles.default}
    >
      {children}
    </span>
  )
}

export default Badge