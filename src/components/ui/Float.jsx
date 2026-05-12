import React from 'react'
import { motion } from 'framer-motion'

const Float = ({ children, delay = 0, duration = 6, x = 20, y = 20 }) => {
  return (
    <motion.div
      animate={{
        x: [0, x, 0],
        y: [0, y, 0],
        rotate: [0, 5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  )
}

export default Float
