import React from 'react'

const Skeleton = ({ className }) => (
  <div className={`animate-pulse bg-gray-200 dark:bg-dark-card rounded-2xl ${className}`} />
)

const RestaurantSkeleton = () => (
  <div className="glass-card rounded-[2rem] overflow-hidden">
    <Skeleton className="h-48 w-full rounded-none" />
    <div className="p-6 space-y-4">
      <div className="flex justify-between">
        <Skeleton className="h-6 w-1/2" />
        <Skeleton className="h-6 w-12" />
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
      <div className="pt-4 border-t border-gray-100 dark:border-white/5 flex justify-between">
        <div className="flex gap-2">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-4 w-8" />
        </div>
        <Skeleton className="h-4 w-16" />
      </div>
    </div>
  </div>
)

export { Skeleton, RestaurantSkeleton }
