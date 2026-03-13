"use client"

import { motion } from "framer-motion"

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Circle - Top Left */}
      <motion.div
        className="absolute top-[10%] left-[5%] text-highlight-blue/20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg width="60" height="60" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" />
        </svg>
      </motion.div>

      {/* Triangle - Top Right */}
      <motion.div
        className="absolute top-[15%] right-[10%] text-highlight-pink/30"
        animate={{
          y: [0, 30, 0],
          rotate: [0, -15, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <svg width="50" height="50" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,15 90,85 10,85" />
        </svg>
      </motion.div>

      {/* Squiggle - Bottom Left */}
      <motion.div
        className="absolute bottom-[20%] left-[10%] text-foreground/5"
        animate={{
          x: [0, 20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      >
        <svg width="80" height="20" viewBox="0 0 100 25" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
          <path d="M10 12.5 Q 30 25 50 12.5 T 90 12.5" />
        </svg>
      </motion.div>

      {/* Star - Bottom Right */}
      <motion.div
        className="absolute bottom-[15%] right-[20%] text-highlight-blue/15"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="40" height="40" viewBox="0 0 100 100" fill="currentColor">
          <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" />
        </svg>
      </motion.div>

      {/* Donut - Center Left */}
      <motion.div
        className="absolute top-[40%] left-[2%] text-highlight-pink/20"
        animate={{
          y: [0, -40, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <svg width="30" height="30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="20">
          <circle cx="50" cy="50" r="30" />
        </svg>
      </motion.div>
    </div>
  )
}
