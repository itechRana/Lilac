import React from 'react'
import { motion } from 'framer-motion'
import { Star, Clock, MapPin, Heart, Sparkles, ChevronRight } from 'lucide-react'
import { restaurants } from '../../data/restaurants'
import { useAppStore } from '../../store/useAppStore'

const RestaurantCard = ({ restaurant }) => {
  const { favorites, toggleFavorite } = useAppStore()
  const isFavorite = favorites.includes(restaurant.id)

  return (
    <motion.div 
      layout
      whileHover={{ y: -10 }}
      className="glass-card rounded-[2rem] overflow-hidden group flex flex-col h-full"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        
        <button 
          onClick={() => toggleFavorite(restaurant.id)}
          className="absolute top-4 left-4 p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/40 transition-colors"
        >
          <Heart className={`w-5 h-5 ${isFavorite ? 'fill-pink text-pink' : 'text-white'}`} />
        </button>

        {restaurant.aiBadge && (
          <div className="absolute top-4 right-4 bg-primary/90 text-white text-[10px] font-bold px-3 py-1 rounded-full flex items-center gap-1 neon-glow">
            <Sparkles className="w-3 h-3" />
            {restaurant.aiBadge}
          </div>
        )}

        <div className="absolute bottom-4 right-4 left-4 flex justify-between items-end text-white">
          <div>
            <h3 className="font-display font-bold text-lg">{restaurant.name}</h3>
            <div className="flex items-center gap-1 text-[10px] opacity-80">
              <MapPin className="w-3 h-3" />
              {restaurant.distance}
            </div>
          </div>
          <div className="bg-lime text-dark-bg font-bold text-xs px-2 py-1 rounded-lg flex items-center gap-1">
            <Star className="w-3 h-3 fill-dark-bg" />
            {restaurant.rating}
          </div>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 line-clamp-2">
          {restaurant.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-white/5">
          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-[10px] font-bold text-gray-400">
              <Clock className="w-3 h-3" />
              {restaurant.waitTime}
            </div>
            <div className="text-[10px] font-bold text-primary">
              {restaurant.price}
            </div>
          </div>
          <div className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
            restaurant.crowd === 'high' ? 'bg-pink/10 text-pink' : 
            restaurant.crowd === 'medium' ? 'bg-primary/10 text-primary' : 
            'bg-lime/10 text-lime'
          }`}>
            {restaurant.crowd === 'high' ? 'مزدحم' : restaurant.crowd === 'medium' ? 'متوسط' : 'هادئ'}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

const TrendingRestaurants = () => {
  return (
    <div className="mb-12">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-display font-bold mb-2">مطاعم ترند 🔥</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">أكثر المطاعم طلباً وتوصية من قبل الزوار والذكاء الاصطناعي</p>
        </div>
        <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
          عرض الكل
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {restaurants.slice(0, 3).map((r) => (
          <RestaurantCard key={r.id} restaurant={r} />
        ))}
      </div>
    </div>
  )
}

export default TrendingRestaurants
export { RestaurantCard }
