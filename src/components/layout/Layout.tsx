import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sidebar } from './Sidebar'
import { Loading } from '../Loading'
import { List, X } from '@phosphor-icons/react'

interface LayoutProps {
  children: React.ReactNode
  currentPath: string
  onNavigate: (path: string) => void
  loading?: boolean
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  currentPath,
  onNavigate,
  loading = false
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const handleNavigate = (path: string) => {
    setSidebarOpen(false)
    onNavigate(path)
  }

  return (
    <Loading loading={loading}>
      <div className="flex h-screen bg-gray-50">
        {/* Mobile Sidebar Overlay */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}>
              <div className="absolute inset-0 bg-black bg-opacity-50" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sidebar */}
        <AnimatePresence>
          {sidebarOpen && (
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 z-50 w-64 lg:hidden">
              <Sidebar currentPath={currentPath} onNavigate={handleNavigate} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Desktop Sidebar */}
        <div className="hidden lg:flex lg:w-64 lg:flex-col">
          <Sidebar currentPath={currentPath} onNavigate={handleNavigate} />
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Mobile Header */}
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-3">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100">
                <List size={24} />
              </button>
              <img src="/logo.webp" alt="Logo" className="w-10 h-10" />
              <div className="w-10" /> {/* Spacer for centering */}
            </div>
          </div>

          {/* Content Area */}
          <main className="flex-1 overflow-y-auto">
            <div className="p-6">{children}</div>
          </main>
        </div>
      </div>
    </Loading>
  )
}
