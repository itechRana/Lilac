import React from 'react'
import HeroSection from '../components/dashboard/HeroSection'
import StatsCards from '../components/dashboard/StatsCards'
import WeatherWidget from '../components/dashboard/WeatherWidget'
import TrendingRestaurants from '../components/dashboard/TrendingRestaurants'
import LiveEvents from '../components/dashboard/LiveEvents'
import FestivalMap from '../components/dashboard/FestivalMap'
import UserSchedulePlanner from '../components/dashboard/UserSchedulePlanner'
import AchievementBadges from '../components/dashboard/AchievementBadges'

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <HeroSection />
      <StatsCards />
      <WeatherWidget />
      
      <div className="grid grid-cols-1 gap-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <TrendingRestaurants />
          </div>
          <div className="lg:col-span-1">
            <AchievementBadges />
          </div>
        </div>
        
        <LiveEvents />
        
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          <FestivalMap />
          <UserSchedulePlanner />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
