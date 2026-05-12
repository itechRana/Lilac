import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Home, 
  Fish, 
  Flame, 
  IceCream, 
  Globe, 
  Sparkles, 
  Heart, 
  Settings, 
  X 
} from 'lucide-react'

const Sidebar = ({ isOpen, onClose }) => {
  const menuItems = [
    { id: 'all', icon: <Home className="w-5 h-5" />, label: 'الكل', path: '/' },
    { id: 'seafood', icon: <Fish className="w-5 h-5" />, label: 'الاكل البحري', path: '/category/seafood' },
    { id: 'grills', icon: <Flame className="w-5 h-5" />, label: 'مشويات', path: '/category/grills' },
    { id: 'desserts', icon: <IceCream className="w-5 h-5" />, label: 'حلويات', path: '/category/desserts' },
    { id: 'intl', icon: <Globe className="w-5 h-5" />, label: 'عالمي', path: '/category/intl' },
    { id: 'nawa', icon: <Sparkles className="w-5 h-5" />, label: 'نُــوَى', path: '/assistant', highlight: true },
    { id: 'favs', icon: <Heart className="w-5 h-5" />, label: 'المفضلة', path: '/favorites' },
    { id: 'settings', icon: <Settings className="w-5 h-5" />, label: 'الاعدادات', path: '/settings' },
  ]

  const [isDesktop, setIsDesktop] = React.useState(window.innerWidth >= 1024)

  React.useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 1024)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { x: '-100%', opacity: 0 },
  }

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      <motion.aside
        initial={isDesktop ? "open" : "closed"}
        animate={isDesktop ? "open" : (isOpen ? "open" : "closed")}
        variants={sidebarVariants}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className={`fixed top-0 left-0 bottom-0 w-64 glass-card z-50 m-4 rounded-3xl overflow-hidden flex flex-col`}
      >
        <div className="p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/30">
              J
            </div>
            <h2 className="font-display font-bold text-lg">جدة فود</h2>
          </div>
          <button onClick={onClose} className="lg:hidden p-2 hover:bg-primary/10 rounded-xl transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-4 space-y-2 py-4">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => {
                if (window.innerWidth < 1024) onClose()
              }}
              className={({ isActive }) => `
                flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-300 group
                ${isActive 
                  ? 'bg-primary text-white shadow-lg shadow-primary/30' 
                  : 'hover:bg-primary/10 text-gray-600 dark:text-gray-400 hover:text-primary'}
                ${item.highlight ? 'border border-primary/20 bg-primary/5' : ''}
              `}
            >
              <span className={`transition-transform duration-300 group-hover:scale-110`}>
                {item.icon}
              </span>
              <span className="font-medium">{item.label}</span>
              {item.highlight && (
                <span className="ml-auto w-2 h-2 bg-pink rounded-full animate-pulse" />
              )}
            </NavLink>
          ))}
        </nav>

        <div className="p-6">
          <div className="bg-gradient-festival p-4 rounded-2xl text-white relative overflow-hidden group">
            <div className="relative z-10">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80">Live Count</p>
              <h3 className="text-2xl font-display font-bold">12.5k</h3>
              <p className="text-xs mt-1">Visitors right now</p>
            </div>
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform">
              <Sparkles className="w-12 h-12" />
            </div>
          </div>
        </div>
      </motion.aside>
    </>
  )
}

export default Sidebar
