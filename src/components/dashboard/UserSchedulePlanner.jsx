import React from 'react'
import { motion, Reorder } from 'framer-motion'
import { Calendar, Clock, MapPin, Trash2, Plus, GripVertical } from 'lucide-react'
import { useAppStore } from '../../store/useAppStore'

const UserSchedulePlanner = () => {
  const { schedule, removeFromSchedule } = useAppStore()

  return (
    <div className="mb-12">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-display font-bold">مخطط رحلتي 🗓️</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">نظّم جدول زيارتك للمطاعم والفعاليات</p>
        </div>
        <button className="p-2 glass rounded-xl hover:bg-primary/10 transition-colors">
          <Plus className="w-5 h-5 text-primary" />
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline View */}
        <div className="lg:col-span-2 space-y-4">
          {schedule.length === 0 ? (
            <div className="glass-card rounded-3xl p-12 text-center flex flex-col items-center gap-4">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                <Calendar className="w-8 h-8" />
              </div>
              <p className="text-gray-500 dark:text-gray-400 font-medium">جدولك فارغ حالياً. أضف بعض المطاعم أو الفعاليات للبدء!</p>
              <button className="btn-primary text-xs py-2 px-6">استكشف المهرجان</button>
            </div>
          ) : (
            <div className="space-y-4">
              {schedule.map((item, index) => (
                <motion.div 
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass-card rounded-2xl p-4 flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-festival flex flex-col items-center justify-center text-white shrink-0">
                    <span className="text-[10px] uppercase font-bold opacity-80">{item.time.split(':')[0]}</span>
                    <span className="text-sm font-bold leading-none">{item.time.split(':')[1]}</span>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="font-bold text-sm">{item.name || item.title}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <div className="flex items-center gap-1 text-[10px] text-gray-400">
                        <MapPin className="w-3 h-3" />
                        {item.location || item.distance}
                      </div>
                      <div className="flex items-center gap-1 text-[10px] text-primary font-bold">
                        <Clock className="w-3 h-3" />
                        {item.waitTime || 'Live'}
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => removeFromSchedule(item.id)}
                    className="p-2 opacity-0 group-hover:opacity-100 hover:bg-pink/10 hover:text-pink rounded-lg transition-all"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                  <div className="cursor-grab active:cursor-grabbing text-gray-300 dark:text-gray-700">
                    <GripVertical className="w-5 h-5" />
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* AI Recommendations for Schedule */}
        <div className="space-y-6">
          <div className="glass-card rounded-3xl p-6 bg-primary/5 border-primary/10 relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-primary" />
                <h3 className="font-display font-bold">اقتراحات نُــوَى لك</h3>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">بناءً على ذوقك والوقت الحالي، نقترح إضافة هذه الوجهة:</p>
              
              <div className="p-3 bg-white dark:bg-dark-bg/50 rounded-2xl border border-primary/10 mb-4">
                <h4 className="font-bold text-xs mb-1">حلويات السحاب ☁️</h4>
                <p className="text-[10px] text-gray-400">مثالية كتحلية بعد وجبتك القادمة. تبعد 2 دقيقة فقط!</p>
                <button className="w-full mt-3 py-2 bg-primary text-white text-[10px] font-bold rounded-xl hover:brightness-110 transition-all">
                  إضافة للجدول
                </button>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl" />
          </div>

          <div className="glass-card rounded-3xl p-6">
            <h3 className="font-display font-bold mb-4">ملخص الرحلة</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">إجمالي الوقفات</span>
                <span className="font-bold">{schedule.length}</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">الوقت المتوقع</span>
                <span className="font-bold">2.5 ساعة</span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <span className="text-gray-400">الميزانية التقديرية</span>
                <span className="font-bold">150 - 200 رس</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSchedulePlanner
