import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Bell, Moon, Sun, User, Menu, X } from 'lucide-react'
import { useThemeStore } from '../../store/useThemeStore'
import { useAppStore } from '../../store/useAppStore'

const Navbar = ({ onMenuClick }) => {
  const { isDarkMode, toggleTheme } = useThemeStore()
  const { notifications } = useAppStore()
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)

  return (
    <nav className="sticky top-0 z-50 glass-card px-4 py-3 flex items-center justify-between mx-4 my-2 rounded-2xl">
      <div className="flex items-center gap-4">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-primary/10 rounded-xl transition-colors"
        >
          <Menu className="w-6 h-6" />
        </button>
        <div className="flex flex-col">
          <h1 className="text-xl font-display font-bold text-primary neon-text leading-tight">Jeddah</h1>
          <span className="text-[10px] font-bold uppercase tracking-widest text-secondary dark:text-pink leading-none">Food Fest</span>
        </div>
      </div>

      <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
        <Search className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 transition-colors ${isSearchFocused ? 'text-primary' : 'text-gray-400'}`} />
        <input 
          type="text"
          placeholder="ابحث عن مطاعم، فعاليات..."
          className="w-full bg-cream dark:bg-dark-bg/50 border border-transparent focus:border-primary/50 rounded-full py-2 pl-10 pr-4 text-sm transition-all focus:ring-2 focus:ring-primary/20 outline-none"
          onFocus={() => setIsSearchFocused(true)}
          onBlur={() => setIsSearchFocused(false)}
        />
      </div>

      <div className="flex items-center gap-2">
        <button 
          onClick={toggleTheme}
          className="p-2 hover:bg-primary/10 rounded-xl transition-colors relative"
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <div className="relative">
          <button 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 hover:bg-primary/10 rounded-xl transition-colors relative"
          >
            <Bell className="w-5 h-5" />
            {notifications.length > 0 && (
              <span className="absolute top-2 right-2 w-2 h-2 bg-pink rounded-full ring-2 ring-white dark:ring-dark-bg" />
            )}
          </button>
          
          <AnimatePresence>
            {showNotifications && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                className="absolute right-0 mt-2 w-72 glass-card rounded-2xl p-4 shadow-2xl overflow-hidden"
              >
                <h3 className="font-display font-bold mb-3 flex items-center justify-between">
                  التنبيهات
                  <span className="text-[10px] bg-primary/20 text-primary px-2 py-0.5 rounded-full">{notifications.length} جديد</span>
                </h3>
                <div className="space-y-3 max-h-60 overflow-y-auto pr-2">
                  {notifications.map(n => (
                    <div key={n.id} className="p-2 hover:bg-primary/5 rounded-xl transition-colors border-l-2 border-primary">
                      <p className="text-xs font-bold">{n.title}</p>
                      <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">{n.description}</p>
                      <span className="text-[8px] text-primary/60 mt-1 block">{n.time}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button className="flex items-center gap-2 p-1.5 hover:bg-primary/10 rounded-full transition-colors ml-2">
          <div className="w-8 h-8 rounded-full bg-gradient-festival p-0.5">
            <div className="w-full h-full rounded-full bg-white dark:bg-dark-bg flex items-center justify-center">
              <User className="w-4 h-4 text-primary" />
            </div>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navbar
