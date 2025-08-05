import React from 'react'
import { motion } from 'framer-motion'
import {
  CurrencyCircleDollar,
  HouseSimple,
  ListBullets,
  SignOut,
  User,
  FileText,
  Calculator
} from '@phosphor-icons/react'

interface SidebarItem {
  id: string
  label: string
  icon: React.ReactNode
  path: string
  active?: boolean
}

interface SidebarProps {
  onNavigate: (path: string) => void
  currentPath: string
}

export const Sidebar: React.FC<SidebarProps> = ({
  onNavigate,
  currentPath
}) => {
  const menuItems: SidebarItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <HouseSimple size={20} />,
      path: '/homePage',
      active: currentPath === '/homePage'
    },
    {
      id: 'cotas',
      label: 'Cotas',
      icon: <ListBullets size={20} />,
      path: '/cotas',
      active: currentPath === '/cotas'
    },
    {
      id: 'pagamentos',
      label: 'Pagamentos',
      icon: <CurrencyCircleDollar size={20} />,
      path: '/pagamentos',
      active: currentPath === '/pagamentos'
    },
    {
      id: 'valores-devolver',
      label: 'Valores a Devolver',
      icon: <Calculator size={20} />,
      path: '/valoresDevolver',
      active: currentPath === '/valoresDevolver'
    },
    {
      id: 'valores-devolver-consulta',
      label: 'Consulta de Valores',
      icon: <FileText size={20} />,
      path: '/valoresDevolverConsulta',
      active: currentPath === '/valoresDevolverConsulta'
    },
    {
      id: 'desbloqueio-conta',
      label: 'Desbloqueio de Conta',
      icon: <User size={20} />,
      path: '/desbloqueioConta',
      active: currentPath === '/desbloqueioConta'
    }
  ]

  const handleLogout = () => {
    onNavigate('/')
  }

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Logo */}
      <div className="flex justify-center items-center p-6 border-b border-gray-200">
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <img src="/logo.webp" alt="Logo" className="w-16 h-16" />
        </motion.div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ x: 4 }}
            whileTap={{ scale: 0.98 }}>
            <button
              onClick={() => onNavigate(item.path)}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200 ${
                item.active
                  ? 'bg-[#14B2C1] text-white shadow-md'
                  : 'text-gray-700 hover:bg-gray-100 hover:text-[#14B2C1]'
              }`}>
              {item.icon}
              {item.label}
            </button>
          </motion.div>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <motion.button
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200">
          <SignOut size={20} />
          Sair
        </motion.button>
      </div>
    </div>
  )
}
