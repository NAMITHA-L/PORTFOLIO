"use client"

import { useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ExperienceSection from "@/components/experience-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import EnhancedBackground from "@/components/enhanced-background"
import CursorSparkle from "@/components/cursor-sparkle"

export default function Portfolio() {
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    // Welcome confetti
  }, [])

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 overflow-x-hidden">
      {/* Animated Background */}
      <motion.div className="fixed inset-0 opacity-20" style={{ y: backgroundY }}>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-indigo-600/20 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-bounce"
          style={{ animationDelay: "1000ms" }}
        />
      </motion.div>

      <EnhancedBackground />
      <CursorSparkle />

      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}
