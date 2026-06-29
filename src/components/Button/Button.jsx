import React from 'react'

const Button = ({ children, variant = 'outline', className = '', onClick, ...props }) => {
  const base = 'cursor-pointer font-medium transition-all duration-300 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-1 focus:ring-offset-transparent'

  const variants = {
    outline: 'border border-white/50 text-white px-5 py-2 rounded-lg bg-transparent hover:bg-green-700/60 hover:border-green-600',
    solid: 'bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-600 border border-green-600',
    icon: 'border border-white/30 text-white p-2 rounded-lg bg-transparent hover:bg-green-700/60 hover:border-green-600',
  }

  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
