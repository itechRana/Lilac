import React from 'react'
import { motion } from 'framer-motion'
import { Ticket, Users, Store, Zap, TrendingUp, Sparkles } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer, YAxis } from 'recharts'

const chartData = [
  { value: 400 }, { value: 600 }, { value: 500 }, { value: 800 }, { value: 1200 }, { value: 1000 }, { value: 1500 }
];

const StatCard = ({ title, value, icon: Icon, color, detail, chart }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="glass-card p-6 rounded-3xl relative overflow-hidden group"
  >
    <div className="flex justify-between items-start mb-4">
      <div className={`p-3 rounded-2xl ${color} bg-opacity-20 text-opacity-100`}>
        <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
      </div>
      {chart && (
        <div className="h-12 w-24">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <Area type="monotone" dataKey="value" stroke="#FF7A00" fill="#FF7A00" fillOpacity={0.1} strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
    <div>
      <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1">{title}</p>
      <h3 className="text-2xl font-display font-bold">{value}</h3>
      <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-1">
        {detail}
      </p>
    </div>
    <div className={`absolute -right-4 -bottom-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500`}>
      <Icon className="w-24 h-24" />
    </div>
  </motion.div>
)

const StatsCards = () => {
  const stats = [
    { title: 'التذاكر المباعة', value: '8,432', icon: Ticket, color: 'bg-primary', detail: 'نمو بنسبة 15% اليوم', chart: true },
    { title: 'البائعين النشطين', value: '124', icon: Store, color: 'bg-secondary', detail: '12 مطعم جديد اليوم' },
    { title: 'الفعاليات الحية', value: '12', icon: Zap, color: 'bg-pink', detail: '3 عروض جارية الآن' },
    { title: 'توصيات نُــوَى اليوم', value: '2,150', icon: Sparkles, color: 'bg-lime', detail: 'دقة عالية بنسبة 98%' },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, i) => (
        <StatCard key={i} {...stat} />
      ))}
    </div>
  )
}

export default StatsCards
