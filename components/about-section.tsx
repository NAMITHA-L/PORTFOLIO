"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, GraduationCap, Code, Sparkles } from "lucide-react"

export default function AboutSection() {
  const highlights = [
    { icon: GraduationCap, text: "VIT Bhopal University", subtext: "B.Tech CSE, CGPA: 9.18" },
    { icon: MapPin, text: "Bhopal, Madhya Pradesh", subtext: "Open to Remote Work" },
    { icon: Code, text: "LLMs & RAG Pipelines", subtext: "Agentic AI Builder" },
    { icon: Sparkles, text: "Real-world Applications", subtext: "AI + Web Systems" },
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-6">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:border-blue-300/50 hover:shadow-[0_0_30px_rgba(147,51,234,0.2)]">
              <CardContent className="p-8">
                <p className="text-blue-100 text-lg leading-relaxed mb-4">
                  I'm a <span className="font-bold text-blue-50">CS Undergrad & AI Enthusiast</span> building at the
                  intersection of <span className="font-bold text-indigo-200">Generative AI</span> and{" "}
                  <span className="font-bold text-blue-50">Scalable Web Systems</span>.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed mb-4">
                  With a <span className="font-bold text-blue-50">9.18 CGPA</span> and hands-on experience in{" "}
                  <span className="font-bold text-indigo-200">LLMs, RAG pipelines, and Agentic AI</span>, I don't just
                  train models I build real-world applications around them.
                </p>
                <p className="text-blue-100 text-lg leading-relaxed">
                  Currently obsessing over making <span className="font-bold text-blue-50">AI agents smarter</span> and{" "}
                  <span className="font-bold text-indigo-200">web apps faster</span>.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, x: 8 }}
                className="flex items-center space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:border-blue-400/50 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.1)] transition-all duration-300"
              >
                <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-blue-100 font-semibold">{item.text}</p>
                  <p className="text-blue-300 text-sm">{item.subtext}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
