"use client"

import { motion } from "framer-motion"

export default function EnhancedBackground() {
  const confetti = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 25 + 20,
    delay: Math.random() * 5,
    colors: ["bg-blue-400/30", "bg-indigo-400/30", "bg-cyan-400/30", "bg-white/20"],
  }))

  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 30 + 20,
    delay: Math.random() * 10,
  }))

  const floatingShapes = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    size: Math.random() * 200 + 100,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 40 + 30,
    delay: Math.random() * 15,
  }))

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(147, 197, 253, 0.4) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      {confetti.map((piece) => (
        <motion.div
          key={`confetti-${piece.id}`}
          className={`absolute ${piece.colors[Math.floor(Math.random() * piece.colors.length)]} rounded-full`}
          style={{
            width: piece.size,
            height: piece.size,
            left: `${piece.x}%`,
            top: `${piece.y}%`,
          }}
          animate={{
            y: [0, 100, -100],
            x: [-50, 50, -30],
            rotate: [0, 360, 720],
            opacity: [0.6, 0.8, 0.3],
            scale: [1, 1.2, 0.8],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Floating particles */}
      {particles.map((particle) => (
        <motion.div
          key={`particle-${particle.id}`}
          className="absolute bg-white/20 rounded-full blur-sm"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [-30, 30, -30],
            x: [-20, 20, -20],
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Large floating shapes */}
      {floatingShapes.map((shape) => (
        <motion.div
          key={`shape-${shape.id}`}
          className="absolute bg-gradient-to-br from-blue-500/15 to-indigo-500/15 rounded-full blur-3xl"
          style={{
            width: shape.size,
            height: shape.size,
            left: `${shape.x}%`,
            top: `${shape.y}%`,
          }}
          animate={{
            y: [-50, 50, -50],
            x: [-30, 30, -30],
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>
        {Array.from({ length: 5 }, (_, i) => (
          <motion.line
            key={`line-${i}`}
            x1={`${i * 25}%`}
            y1="0%"
            x2={`${i * 25 + 25}%`}
            y2="100%"
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{
              duration: 8,
              delay: i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>

      {/* Pulsing orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  )
}
