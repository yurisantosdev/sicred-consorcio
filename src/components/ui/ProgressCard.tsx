import React from 'react'
import { motion } from 'framer-motion'
import { Card } from './Card'

interface ProgressCardProps {
  title: string
  current: number
  total: number
  unit?: string
  color?: 'blue' | 'green' | 'purple' | 'orange'
  icon?: React.ReactNode
  className?: string
}

export const ProgressCard: React.FC<ProgressCardProps> = ({
  title,
  current,
  total,
  unit = '',
  color = 'blue',
  icon,
  className = ''
}) => {
  const percentage = total > 0 ? (current / total) * 100 : 0

  const colors = {
    blue: {
      bg: 'bg-blue-500',
      text: 'text-blue-600',
      light: 'bg-blue-50',
      border: 'border-blue-200'
    },
    green: {
      bg: 'bg-green-500',
      text: 'text-green-600',
      light: 'bg-green-50',
      border: 'border-green-200'
    },
    purple: {
      bg: 'bg-purple-500',
      text: 'text-purple-600',
      light: 'bg-purple-50',
      border: 'border-purple-200'
    },
    orange: {
      bg: 'bg-orange-500',
      text: 'text-orange-600',
      light: 'bg-orange-50',
      border: 'border-orange-200'
    }
  }

  const selectedColor = colors[color]

  return (
    <Card className={`${selectedColor.light} ${selectedColor.border} ${className}`} hover>
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-3">
            {icon && (
              <div className={`p-2 rounded-lg ${selectedColor.bg} text-white`}>
                {icon}
              </div>
            )}
            <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          </div>

          <div className="mb-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">
                {current.toLocaleString()}
              </span>
              <span className="text-lg text-gray-500">
                / {total.toLocaleString()} {unit}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Progresso</span>
              <span className={`font-medium ${selectedColor.text}`}>
                {percentage.toFixed(1)}%
              </span>
            </div>

            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                className={`h-2 rounded-full ${selectedColor.bg}`}
                initial={{ width: 0 }}
                animate={{ width: `${percentage}%` }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
