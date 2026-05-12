import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, MapPin, ArrowRight } from 'lucide-react'
import Float from '../ui/Float'

const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({ h: 12, m: 45, s: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.s > 0) return { ...prev, s: prev.s - 1 }
        if (prev.m > 0) return { ...prev, m: prev.m - 1, s: 59 }
        if (prev.h > 0) return { ...prev, h: prev.h - 1, m: 59, s: 59 }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="relative rounded-[2rem] overflow-hidden min-h-[500px] flex items-center mb-8">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-pink opacity-90" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center mix-blend-overlay opacity-30" />
      
      {/* Animated Blobs */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/4 -right-20 w-80 h-80 bg-lime rounded-full blur-[100px] opacity-20"
      />

      {/* Floating Visuals */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4">
          <Float delay={0.2} x={10} y={-30}>
            <span className="text-6xl filter drop-shadow-2xl">🍔</span>
          </Float>
        </div>
        <div className="absolute bottom-40 left-1/3">
          <Float delay={1} x={-20} y={40}>
            <span className="text-5xl filter drop-shadow-2xl">🍣</span>
          </Float>
        </div>
        <div className="absolute top-1/3 left-10">
          <Float delay={2} x={30} y={20}>
            <span className="text-4xl filter drop-shadow-2xl">🍦</span>
          </Float>
        </div>
        <div className="absolute bottom-20 right-1/3">
          <Float delay={0.5} x={40} y={-10}>
            <span className="text-5xl filter drop-shadow-2xl">🍕</span>
          </Float>
        </div>
      </div>

      <div className="relative z-10 p-8 lg:p-16 w-full max-w-4xl text-white">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-6"
        >
          <span className="w-2 h-2 bg-lime rounded-full animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-widest">مباشر الآن</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl lg:text-7xl font-display font-bold mb-6 leading-[1.1]"
        >
          اكتشف نكهات <br />
          <span className="text-lime">جدة العالمية</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg opacity-80 mb-8 max-w-xl"
        >
          انضم إلينا في أكبر مهرجان للمأكولات في المنطقة. تجارب طهي حية، عروض موسيقية، وأفضل المطاعم العالمية في مكان واحد.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4"
        >
          <button className="btn-primary flex items-center gap-2 px-8">
            احجز تذكرتك
            <ArrowRight className="w-5 h-5" />
          </button>
          <button className="glass px-8 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-white/20 transition-all">
            استكشف الخريطة
            <MapPin className="w-5 h-5" />
          </button>
        </motion.div>
      </div>

      {/* Countdown & Stats Sidebar */}
      <div className="hidden lg:flex absolute right-16 bottom-16 flex-col gap-6 items-end">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
          className="glass-dark p-6 rounded-3xl min-w-[200px]"
        >
          <p className="text-[10px] uppercase tracking-widest opacity-60 mb-2">ينتهي العرض خلال</p>
          <div className="flex gap-3 font-display font-bold text-3xl">
            <div>
              <p>{String(timeLeft.h).padStart(2, '0')}</p>
              <p className="text-[10px] font-sans opacity-60">ساعة</p>
            </div>
            <span className="opacity-40">:</span>
            <div>
              <p>{String(timeLeft.m).padStart(2, '0')}</p>
              <p className="text-[10px] font-sans opacity-60">دقيقة</p>
            </div>
            <span className="opacity-40">:</span>
            <div>
              <p>{String(timeLeft.s).padStart(2, '0')}</p>
              <p className="text-[10px] font-sans opacity-60">ثانية</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="glass-dark p-6 rounded-3xl min-w-[200px]"
        >
          <div className="flex items-center gap-4 mb-2">
            <Users className="text-primary w-5 h-5" />
            <p className="text-[10px] uppercase tracking-widest opacity-60">الزوار الآن</p>
          </div>
          <h3 className="text-3xl font-display font-bold">15,234</h3>
          <p className="text-[10px] text-lime font-bold mt-1">+12% منذ الساعة الماضية</p>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
