import React from 'react'

const Select = ({
  label = null,
  options = [],
  className = '',
  id = '',
  required = false,
  error = null,
  value = '',
  placeholder = 'Select an option',
  ...props
}) => {
  return (
    <div className="w-full flex flex-col items-start gap-1.5">
      {label && (
        <label htmlFor={id} className="text-xs font-semibold text-slate-700 leading-none">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <select
        id={id}
        required={required}
        value={value}
        className={`w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:ring-offset-0 disabled:opacity-50 transition-all duration-200 ${
          error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''
        } ${className}`}
        {...props}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <span className="text-xs text-rose-500 mt-0.5">{error}</span>}
    </div>
  )
}

export default Select
