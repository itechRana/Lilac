import React from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { RestaurantCard } from '../components/dashboard/TrendingRestaurants'
import { restaurants } from '../data/restaurants'
import { Fish, Flame, IceCream, Globe, LayoutGrid } from 'lucide-react'

const Category = () => {
  const { id } = useParams()
  
  const categories = {
    seafood: { label: 'الاكل البحري', icon: <Fish />, color: 'text-secondary' },
    grills: { label: 'مشويات', icon: <Flame />, color: 'text-primary' },
    desserts: { label: 'حلويات', icon: <IceCream />, color: 'text-pink' },
    intl: { label: 'عالمي', icon: <Globe />, color: 'text-lime' }
  }

  const category = categories[id] || { label: 'الكل', icon: <LayoutGrid />, color: 'text-primary' }
  const filteredRestaurants = id ? restaurants.filter(r => r.category === id) : restaurants

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-12 flex items-center gap-4">
        <div className={`w-16 h-16 bg-cream dark:bg-dark-card rounded-3xl flex items-center justify-center ${category.color}`}>
          {React.cloneElement(category.icon, { className: 'w-8 h-8' })}
        </div>
        <div>
          <h1 className="text-4xl font-display font-bold">{category.label}</h1>
          <p className="text-gray-500 dark:text-gray-400">استكشف أفضل خيارات {category.label} في المهرجان</p>
        </div>
      </div>

      {filteredRestaurants.length === 0 ? (
        <div className="glass-card rounded-[2.5rem] p-20 text-center">
          <p className="text-gray-500">لا يوجد مطاعم في هذه الفئة حالياً</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((r) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Category
