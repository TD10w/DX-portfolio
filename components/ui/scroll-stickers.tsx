"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export function ScrollSticker({ 
  children, 
  className,
  speed = 1,
  direction = 1 
}: { 
  children: React.ReactNode, 
  className?: string,
  speed?: number,
  direction?: 1 | -1
}) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * speed * direction])
  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed])
  
  return (
    <motion.div 
      ref={ref}
      style={{ rotate, y }} 
      className={`absolute z-10 pointer-events-none ${className}`}
    >
      {children}
    </motion.div>
  )
}

export function StarSticker({ className }: { className?: string }) {
  return (
    <ScrollSticker className={className} speed={0.5}>
      <svg width="60" height="60" viewBox="0 0 100 100" fill="#FFDD63" stroke="black" strokeWidth="3">
        <polygon points="50,5 61,35 95,35 68,57 79,91 50,70 21,91 32,57 5,35 39,35" />
      </svg>
    </ScrollSticker>
  )
}

export function FlowerSticker({ className }: { className?: string }) {
  return (
    <ScrollSticker className={className} speed={0.8} direction={-1}>
      <svg width="50" height="50" viewBox="0 0 100 100" fill="#FF6B6B" stroke="black" strokeWidth="3">
        <path d="M50 20 Q60 5 75 20 T80 50 Q95 60 80 75 T50 80 Q40 95 25 80 T20 50 Q5 40 20 25 T50 20" />
        <circle cx="50" cy="50" r="10" fill="#FFF7E0" stroke="black" strokeWidth="3" />
      </svg>
    </ScrollSticker>
  )
}

export function SparkleSticker({ className }: { className?: string }) {
  return (
    <ScrollSticker className={className} speed={1.2}>
      <svg width="40" height="40" viewBox="0 0 100 100" fill="#41BBD9" stroke="black" strokeWidth="2">
        <path d="M50 0 L60 40 L100 50 L60 60 L50 100 L40 60 L0 50 L40 40 Z" />
      </svg>
    </ScrollSticker>
  )
}
