"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

type HeroSectionProps = {}

export default function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="text-center max-w-4xl mx-auto">
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.6 }}>
          <div className="w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center text-4xl font-bold text-white shadow-2xl">
            NL
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4"
        >
          NAMITHA L
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-2xl md:text-3xl text-white mb-6 font-light"
        >
          B.Tech CSE Student
        </motion.p>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-white mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          NLP Enthusiast with great interest in Full Stack and DSA
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-6 mb-8"
        >
          <a
            href="https://github.com/NAMITHA-L"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 transition-colors duration-300 font-medium px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-500/10"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/namitha-l-29819128a/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 transition-colors duration-300 font-medium px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-500/10"
          >
            LinkedIn
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/leninnabjcp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 transition-colors duration-300 font-medium px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-500/10"
          >
            GeeksForGeeks
          </a>
          <a
            href="https://www.hackerrank.com/profile/namitha_23bce111"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 transition-colors duration-300 font-medium px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-500/10"
          >
            HackerRank
          </a>
          <a
            href="https://leetcode.com/u/1FHPbTZfvG/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-200 transition-colors duration-300 font-medium px-4 py-2 border border-blue-400 rounded-lg hover:bg-blue-500/10"
          >
            LeetCode
          </a>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-4"
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }
            }}
          >
            <Mail className="w-5 h-5 mr-2" />
            Get In Touch
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-400 text-white hover:bg-blue-500/20 px-8 py-3 text-lg font-semibold backdrop-blur-sm bg-transparent"
            onClick={() => {
              const element = document.getElementById("projects")
              if (element) {
                element.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                  inline: "nearest",
                })
              }
            }}
          >
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
