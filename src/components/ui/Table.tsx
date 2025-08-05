import React from 'react'
import { motion } from 'framer-motion'

interface TableColumn {
  key: string
  label: string
  align?: 'left' | 'center' | 'right'
  width?: string
}

interface TableProps {
  columns: TableColumn[]
  data: any[]
  className?: string
  striped?: boolean
  hover?: boolean
  loading?: boolean
  emptyMessage?: string
}

export const Table: React.FC<TableProps> = ({
  columns,
  data,
  className = '',
  striped = true,
  hover = true,
  loading = false,
  emptyMessage = 'Nenhum dado encontrado'
}) => {
  if (loading) {
    return (
      <div className="animate-pulse">
        <div className="bg-gray-200 h-10 rounded-t-lg mb-2"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="bg-gray-100 h-12 rounded mb-1"></div>
        ))}
      </div>
    )
  }

  if (data.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <p className="mt-2">{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className={`overflow-hidden rounded-lg border border-gray-200 ${className}`}>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map((column, index) => (
                <th
                  key={column.key}
                  className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${
                    column.align === 'center' ? 'text-center' :
                    column.align === 'right' ? 'text-right' : 'text-left'
                  }`}
                  style={{ width: column.width }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.map((row, rowIndex) => (
              <motion.tr
                key={rowIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: rowIndex * 0.05 }}
                className={`${
                  striped && rowIndex % 2 === 1 ? 'bg-gray-50' : ''
                } ${
                  hover ? 'hover:bg-gray-100 transition-colors duration-150' : ''
                }`}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={`px-6 py-4 whitespace-nowrap text-sm text-gray-900 ${
                      column.align === 'center' ? 'text-center' :
                      column.align === 'right' ? 'text-right' : 'text-left'
                    }`}
                  >
                    {row[column.key]}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
