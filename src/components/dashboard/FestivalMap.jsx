import React from 'react'
import { motion } from 'framer-motion'
import { MapPin, Navigation, Sparkles, Layers } from 'lucide-react'

const FestivalMap = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-display font-bold">خريطة المهرجان التفاعلية 🗺️</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">تصفح الزونات وابحث عن المسار الأقصر لتناول وجبتك</p>
        </div>
        <div className="flex gap-2">
          <button className="p-2 glass rounded-xl hover:bg-primary/10 transition-colors">
            <Layers className="w-5 h-5" />
          </button>
          <button className="btn-primary flex items-center gap-2 py-2 px-4 text-xs">
            <Navigation className="w-4 h-4" />
            المسار الذكي
          </button>
        </div>
      </div>

      <div className="glass-card rounded-[2.5rem] p-4 h-[400px] relative overflow-hidden">
        {/* Mock Map Background */}
        <div className="absolute inset-0 bg-secondary/5 dark:bg-dark-card/50">
          <svg width="100%" height="100%" viewBox="0 0 800 400" className="opacity-20 dark:opacity-10">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Zones */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-pink/20 rounded-full blur-3xl animate-pulse" />

        <div className="relative h-full flex items-center justify-center">
          {/* Mock Map Markers */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute top-20 left-40"
          >
            <div className="relative group cursor-pointer">
              <div className="bg-primary p-2 rounded-full shadow-lg neon-glow">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 glass-card p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <p className="text-[10px] font-bold">منطقة المشويات</p>
                <p className="text-[8px] text-primary">مزدحم جداً 🔥</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            className="absolute bottom-40 right-60"
          >
            <div className="relative group cursor-pointer">
              <div className="bg-secondary p-2 rounded-full shadow-lg">
                <MapPin className="w-4 h-4 text-white" />
              </div>
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-32 glass-card p-2 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <p className="text-[10px] font-bold">المنطقة العالمية</p>
                <p className="text-[8px] text-secondary">هادئ الآن ✨</p>
              </div>
            </div>
          </motion.div>

          <div className="flex flex-col items-center gap-4 text-center">
            <Sparkles className="w-12 h-12 text-primary animate-spin-slow" />
            <h3 className="text-xl font-display font-bold">جاري تحميل الخريطة المباشرة...</h3>
            <p className="text-xs text-gray-500 max-w-xs">نحن نستخدم الذكاء الاصطناعي لتحليل الكثافة وتحديد أفضل المسارات لك</p>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-6 left-6 flex gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary rounded-full" />
            <span className="text-[10px] font-bold">مزدحم</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-secondary rounded-full" />
            <span className="text-[10px] font-bold">هادئ</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FestivalMap
