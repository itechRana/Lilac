import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './components/layout/MainLayout'
import Dashboard from './pages/Dashboard'
import Category from './pages/Category'
import Favorites from './pages/Favorites'
import Assistant from './pages/Assistant'

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/settings" element={<div className="p-8"><h1 className="text-3xl font-display font-bold">Settings</h1><p className="mt-4 text-gray-500">Settings and preferences coming soon...</p></div>} />
        <Route path="/profile" element={<div className="p-8"><h1 className="text-3xl font-display font-bold">Profile</h1><p className="mt-4 text-gray-500">User profile management coming soon...</p></div>} />
        <Route path="/search" element={<div className="p-8"><h1 className="text-3xl font-display font-bold">Search</h1><p className="mt-4 text-gray-500">Advanced search features coming soon...</p></div>} />
      </Routes>
    </MainLayout>
  )
}

export default App
