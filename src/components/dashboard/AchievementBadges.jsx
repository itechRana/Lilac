import React from 'react'
import { motion } from 'framer-motion'
import { Award, Star, Zap, Flame, Trophy } from 'lucide-react'

const AchievementBadges = () => {
  const achievements = [
    { id: 1, name: 'مكتشف النكهات', icon: <Flame />, color: 'text-orange-500', bg: 'bg-orange-500/10', level: 'Lvl 3' },
    { id: 2, name: 'خبير المشويات', icon: <Zap />, color: 'text-yellow-500', bg: 'bg-yellow-500/10', level: 'Lvl 5' },
    { id: 3, name: 'زائر وفاء', icon: <Star />, color: 'text-purple-500', bg: 'bg-purple-500/10', level: 'Lvl 2' },
    { id: 4, name: 'بطل المهرجان', icon: <Trophy />, color: 'text-pink-500', bg: 'bg-pink-500/10', level: 'Lvl 1' },
  ]

  return (
    <div className="glass-card rounded-3xl p-6">
      <div className="flex items-center gap-2 mb-6">
        <Award className="w-6 h-6 text-primary" />
        <h3 className="font-display font-bold">إنجازات المهرجان 🏆</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {achievements.map((a) => (
          <motion.div 
            key={a.id}
            whileHover={{ scale: 1.05 }}
            className={`${a.bg} p-4 rounded-2xl flex flex-col items-center text-center gap-2 border border-white/10`}
          >
            <div className={`${a.color} w-10 h-10 flex items-center justify-center`}>
              {React.cloneElement(a.icon, { className: 'w-8 h-8' })}
            </div>
            <p className="text-[10px] font-bold">{a.name}</p>
            <span className="text-[8px] bg-white/20 px-2 py-0.5 rounded-full font-bold">{a.level}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AchievementBadges
