import React from 'react'

const Card = ({
  children,
  className = '',
  title = null,
  description = null,
  footer = null,
  noPadding = false,
  ...props
}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden transition-all duration-200 ${className}`}
      style={{
        backgroundColor: '#161B22',
        border: '1px solid #30363D',
      }}
      {...props}
    >
      {(title || description) && (
        <div
          className="px-6 py-4"
          style={{ borderBottom: '1px solid #30363D' }}
        >
          {title && (
            <h3
              className="text-lg font-bold leading-6"
              style={{ color: '#F0F6FC' }}
            >
              {title}
            </h3>
          )}
          {description && (
            <p className="mt-1 text-sm" style={{ color: '#8B949E' }}>
              {description}
            </p>
          )}
        </div>
      )}

      <div className={noPadding ? '' : 'p-6'}>{children}</div>

      {footer && (
        <div
          className="px-6 py-4 flex items-center justify-between gap-3"
          style={{
            backgroundColor: '#0D1117',
            borderTop: '1px solid #30363D',
          }}
        >
          {footer}
        </div>
      )}
    </div>
  )
}

export default Card