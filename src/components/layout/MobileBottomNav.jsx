import React from 'react'
import { NavLink } from 'react-router-dom'
import { Home, Search, Sparkles, Heart, User } from 'lucide-react'

const MobileBottomNav = () => {
  const navItems = [
    { id: 'home', icon: <Home className="w-6 h-6" />, label: 'الرئيسية', path: '/' },
    { id: 'search', icon: <Search className="w-6 h-6" />, label: 'بحث', path: '/search' },
    { id: 'nawa', icon: <Sparkles className="w-6 h-6" />, label: 'نُــوَى', path: '/assistant' },
    { id: 'favs', icon: <Heart className="w-6 h-6" />, label: 'المفضلة', path: '/favorites' },
    { id: 'profile', icon: <User className="w-6 h-6" />, label: 'حسابي', path: '/profile' },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 lg:hidden glass-card m-4 rounded-2xl z-50 px-2 py-2 flex items-center justify-around shadow-2xl">
      {navItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) => `
            flex flex-col items-center gap-1 p-2 rounded-xl transition-all duration-300
            ${isActive ? 'text-primary' : 'text-gray-400 hover:text-primary'}
          `}
        >
          <div className={`transition-transform duration-300 ${item.id === 'nawa' ? 'animate-bounce' : ''}`}>
            {item.icon}
          </div>
          <span className="text-[10px] font-bold">{item.label}</span>
          {item.id === 'nawa' && (
            <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-pink rounded-full shadow-lg shadow-pink/50" />
          )}
        </NavLink>
      ))}
    </nav>
  )
}

export default MobileBottomNav
