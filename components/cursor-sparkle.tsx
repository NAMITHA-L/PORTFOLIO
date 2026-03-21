"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Sparkle {
  id: number
  x: number
  y: number
}

export default function CursorSparkle() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([])
  const [nextId, setNextId] = useState(0)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const newSparkle: Sparkle = {
        id: nextId,
        x: e.clientX,
        y: e.clientY,
      }

      setSparkles((prev) => [...prev, newSparkle])
      setNextId((prev) => prev + 1)

      // Remove sparkle after animation completes
      setTimeout(() => {
        setSparkles((prev) => prev.filter((s) => s.id !== newSparkle.id))
      }, 1000)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [nextId])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-2 h-2 bg-white/80 rounded-full shadow-lg"
          style={{
            left: sparkle.x,
            top: sparkle.y,
            boxShadow: "0 0 8px rgba(255, 255, 255, 0.8)",
          }}
          initial={{ scale: 1, opacity: 1 }}
          animate={{
            scale: 0,
            opacity: 0,
            y: [0, -20, -40],
            x: [0, Math.random() * 20 - 10, Math.random() * 40 - 20],
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  )
}
