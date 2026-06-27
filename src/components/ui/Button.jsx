import React from 'react'

const Button = ({
  children,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  ...props
}) => {
  const baseStyle = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none'

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base',
  }

  const variantStyles = {
    primary: {
      backgroundColor: '#3FB950',
      color: '#0D1117',
      border: '1px solid transparent',
    },
    secondary: {
      backgroundColor: '#161B22',
      color: '#F0F6FC',
      border: '1px solid #30363D',
    },
    danger: {
      backgroundColor: '#DA3633',
      color: '#F0F6FC',
      border: '1px solid transparent',
    },
    success: {
      backgroundColor: '#3FB950',
      color: '#0D1117',
      border: '1px solid transparent',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#8B949E',
      border: '1px solid transparent',
    },
  }

  const hoverStyles = {
    primary: '#2EA043',
    secondary: '#1F2937',
    danger: '#B91C1C',
    success: '#2EA043',
    ghost: '#161B22',
  }

  const handleMouseEnter = (e) => {
    e.currentTarget.style.backgroundColor = hoverStyles[variant] || hoverStyles.primary
  }

  const handleMouseLeave = (e) => {
    e.currentTarget.style.backgroundColor =
      variantStyles[variant]?.backgroundColor || variantStyles.primary.backgroundColor
  }

  return (
    <button
      type={type}
      className={`${baseStyle} ${sizes[size] || sizes.md} ${className}`}
      style={variantStyles[variant] || variantStyles.primary}
      disabled={disabled}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button