import React from 'react'

const TextArea = ({
  label = null,
  placeholder = '',
  className = '',
  id = '',
  required = false,
  error = null,
  rows = 4,
  ...props
}) => {
  return (
    <div className="w-full flex flex-col items-start gap-1.5">
      {label && (
        <label htmlFor={id} className="text-xs font-semibold text-slate-700 leading-none">
          {label} {required && <span className="text-rose-500">*</span>}
        </label>
      )}
      <textarea
        id={id}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className={`w-full rounded-lg border border-slate-200 bg-slate-50 px-3.5 py-2 text-sm text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:ring-offset-0 disabled:opacity-50 transition-all duration-200 resize-y ${
          error ? 'border-rose-500 focus:border-rose-500 focus:ring-rose-500/20' : ''
        } ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-rose-500 mt-0.5">{error}</span>}
    </div>
  )
}

export default TextArea
