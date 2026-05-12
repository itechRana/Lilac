import React from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import { RestaurantCard } from '../components/dashboard/TrendingRestaurants'
import { restaurants } from '../data/restaurants'
import { useAppStore } from '../store/useAppStore'

const Favorites = () => {
  const { favorites } = useAppStore()
  const favoriteRestaurants = restaurants.filter(r => favorites.includes(r.id))

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12 flex items-center gap-4">
        <div className="w-16 h-16 bg-pink/10 rounded-3xl flex items-center justify-center text-pink">
          <Heart className="w-8 h-8 fill-pink" />
        </div>
        <div>
          <h1 className="text-4xl font-display font-bold">المفضلة</h1>
          <p className="text-gray-500 dark:text-gray-400">جميع الأماكن التي أحببتها في مكان واحد</p>
        </div>
      </div>

      {favoriteRestaurants.length === 0 ? (
        <div className="glass-card rounded-[2.5rem] p-20 text-center flex flex-col items-center gap-6">
          <div className="w-24 h-24 bg-gray-100 dark:bg-dark-card rounded-full flex items-center justify-center text-gray-300">
            <Heart className="w-12 h-12" />
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold mb-2">قائمتك فارغة</h2>
            <p className="text-gray-500 dark:text-gray-400">ابدأ باستكشاف المطاعم واضغط على أيقونة القلب لحفظها هنا</p>
          </div>
          <button className="btn-primary">استكشف المطاعم</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {favoriteRestaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Favorites
