import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useAppStore = create(
  persist(
    (set) => ({
      favorites: [],
      schedule: [],
      notifications: [
        { id: 1, title: 'Welcome to Jeddah Food Fest!', description: 'Explore the best restaurants in town.', type: 'info', time: 'Just now' },
        { id: 2, title: 'Nawa Suggestion', description: 'Try the new seafood platter at The Blue Wave.', type: 'ai', time: '2 mins ago' },
      ],
      toggleFavorite: (id) => set((state) => ({
        favorites: state.favorites.includes(id)
          ? state.favorites.filter(fav => fav !== id)
          : [...state.favorites, id]
      })),
      addToSchedule: (item) => set((state) => ({
        schedule: [...state.schedule, { ...item, id: Date.now() }]
      })),
      removeFromSchedule: (id) => set((state) => ({
        schedule: state.schedule.filter(item => item.id !== id)
      })),
      clearNotifications: () => set({ notifications: [] }),
    }),
    {
      name: 'app-storage',
    }
  )
)
