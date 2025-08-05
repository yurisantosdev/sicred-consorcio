import { LoadingType } from '@/types/General'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export function Loading(props: LoadingType) {
  return (
    <div className="relative">
      <AnimatePresence>
        {props.loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-50 bg-white/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="relative">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-[#14B2C1] rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-[#14B2C1] rounded-full animate-spin" style={{ animationDelay: '-0.5s' }}></div>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-sm text-gray-600 font-medium"
              >
                Carregando...
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {props.children}
    </div>
  )
}
