import React from 'react'
import { motion } from 'framer-motion'
import { Cloud, Sun, Droplets, Wind } from 'lucide-react'

const WeatherWidget = () => {
  return (
    <div className="glass-card rounded-[2rem] p-6 mb-8 flex items-center justify-between relative overflow-hidden group">
      <div className="flex items-center gap-6 relative z-10">
        <div className="relative">
          <Sun className="w-12 h-12 text-primary animate-pulse" />
          <Cloud className="absolute -bottom-2 -right-2 w-8 h-8 text-gray-400 opacity-60" />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-4xl font-display font-bold">28°C</h3>
            <span className="text-sm text-gray-400 font-bold uppercase tracking-widest">Jeddah</span>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-400">سماء صافية • وقت مثالي لتناول العشاء في الخارج 🌅</p>
        </div>
      </div>

      <div className="hidden md:flex gap-8 relative z-10">
        <div className="text-center">
          <Droplets className="w-5 h-5 text-secondary mx-auto mb-1" />
          <p className="text-[10px] text-gray-400">الرطوبة</p>
          <p className="text-xs font-bold">45%</p>
        </div>
        <div className="text-center">
          <Wind className="w-5 h-5 text-lime mx-auto mb-1" />
          <p className="text-[10px] text-gray-400">الرياح</p>
          <p className="text-xs font-bold">12 كم/س</p>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute -right-20 top-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
    </div>
  )
}

export default WeatherWidget
