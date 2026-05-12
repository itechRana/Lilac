import React from 'react'
import { motion } from 'framer-motion'
import { Music, Mic2, Tag, MapPin, Clock, Calendar } from 'lucide-react'
import { events } from '../../data/events'

const EventCard = ({ event }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="glass-card rounded-3xl p-4 flex gap-4 group cursor-pointer"
    >
      <div className="relative w-24 h-24 rounded-2xl overflow-hidden shrink-0">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start mb-1">
          <span className={`text-[8px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full ${
            event.type === 'show' ? 'bg-secondary/10 text-secondary' : 
            event.type === 'music' ? 'bg-pink/10 text-pink' : 
            'bg-lime/10 text-lime'
          }`}>
            {event.type}
          </span>
          <div className="flex items-center gap-1 text-[10px] text-primary font-bold">
            <Clock className="w-3 h-3" />
            {event.time}
          </div>
        </div>
        
        <h3 className="font-display font-bold text-sm mb-1 truncate">{event.title}</h3>
        <p className="text-[10px] text-gray-500 dark:text-gray-400 mb-2">{event.performer}</p>
        
        <div className="flex items-center gap-1 text-[10px] text-gray-400">
          <MapPin className="w-3 h-3" />
          {event.location}
        </div>
      </div>
    </motion.div>
  )
}

const LiveEvents = () => {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 bg-pink/20 rounded-2xl flex items-center justify-center text-pink">
          <Calendar className="w-6 h-6" />
        </div>
        <div>
          <h2 className="text-2xl font-display font-bold">فعاليات جارية 🎭</h2>
          <p className="text-xs text-gray-500 dark:text-gray-400">لا تفوت العروض الحية والخصومات المباشرة</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  )
}

export default LiveEvents
