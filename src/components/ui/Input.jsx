import React from 'react'

const Input = ({
  label = null,
  type = 'text',
  placeholder = '',
  className = '',
  id = '',
  required = false,
  error = null,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col items-start gap-1.5">
      {label && (
        <label
          htmlFor={id}
          className="text-xs font-semibold leading-none"
          style={{ color: '#8B949E' }}
        >
          {label}{' '}
          {required && <span style={{ color: '#DA3633' }}>*</span>}
        </label>
      )}
      <input
        id={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className={`w-full rounded-lg px-3.5 py-2 text-sm focus:outline-none focus:ring-2 disabled:opacity-50 transition-all duration-200 ${className}`}
        style={{
          backgroundColor: '#0D1117',
          border: error ? '1px solid #DA3633' : '1px solid #30363D',
          color: '#F0F6FC',
          '--placeholder-color': '#8B949E',
        }}
        onFocus={(e) => {
          e.currentTarget.style.border = error
            ? '1px solid #DA3633'
            : '1px solid #58A6FF'
          e.currentTarget.style.boxShadow = error
            ? '0 0 0 3px rgba(218, 54, 51, 0.15)'
            : '0 0 0 3px rgba(88, 166, 255, 0.15)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.border = error
            ? '1px solid #DA3633'
            : '1px solid #30363D'
          e.currentTarget.style.boxShadow = 'none'
        }}
        {...props}
      />
      {error && (
        <span className="text-xs mt-0.5" style={{ color: '#DA3633' }}>
          {error}
        </span>
      )}
    </div>
  )
}

export default Input