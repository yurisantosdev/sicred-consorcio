import React from 'react'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  padding?: 'sm' | 'md' | 'lg'
  shadow?: 'sm' | 'md' | 'lg'
}

export const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hover = false,
  padding = 'md',
  shadow = 'md'
}) => {
  const paddingClasses = {
    sm: 'p-3',
    md: 'p-6',
    lg: 'p-8'
  }

  const shadowClasses = {
    sm: 'shadow-sm',
    md: 'shadow-lg',
    lg: 'shadow-xl'
  }

  const baseClasses = `bg-white rounded-xl border border-gray-100 ${paddingClasses[padding]} ${shadowClasses[shadow]}`
  const hoverClasses = hover ? 'hover:shadow-xl hover:scale-[1.02] transition-all duration-300' : ''

  const Component = hover ? motion.div : 'div'
  const motionProps = hover ? {
    whileHover: { y: -2 },
    transition: { duration: 0.2 }
  } : {}

  return (
    <Component
      className={`${baseClasses} ${hoverClasses} ${className}`}
      {...motionProps}
    >
      {children}
    </Component>
  )
}
