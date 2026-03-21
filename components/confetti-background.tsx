"use client"

import { motion } from "framer-motion"

export default function ConfettiBackground() {
  // Animated confetti-like particles with smooth hovering motion
  const confettiParticles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5,
    color: ["#3B82F6", "#1D4ED8", "#60A5FA", "#93C5FD", "#DBEAFE"][Math.floor(Math.random() * 5)],
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-5">
      {confettiParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-15, 15, -15],
            rotate: [0, 360, 0],
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Smooth falling confetti effect */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`falling-${i}`}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            backgroundColor: ["#3B82F6", "#60A5FA", "#93C5FD", "#DBEAFE"][Math.floor(Math.random() * 4)],
          }}
          initial={{ y: -20, opacity: 0.8 }}
          animate={{ y: "100vh", opacity: 0 }}
          transition={{
            duration: Math.random() * 8 + 5,
            delay: Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}
