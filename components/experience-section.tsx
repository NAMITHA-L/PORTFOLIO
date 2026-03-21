"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building } from "lucide-react"

export default function ExperienceSection() {
  const experiences = [
    {
      title: "AI Intern",
      company: "AMASQIS.ai",
      duration: "06/2025 - 12/2025",
      location: "Remote",
      achievements: [
        "Analyzed ML system architectures for integrating inference into a geospatial platform, including API data flow mapping between frontend and Python backend to support debugging and deployment.",
        "Researched and documented AI solutions, comparing Speech-to-Text models (Whisper vs. DeepSpeech) for latency and cost, and preparing technical specifications for a fashion recommendation microservice.",
      ],
      skills: ["GIS", "Cloud Computing", "ETL", "Data Engineering"],
    },
    {
      title: "Project Management Intern",
      company: "Pawzz Foundation",
      duration: "11/2024 - 12/2024",
      location: "Remote",
      achievements: [
        "Led documentation and communications for social campaigns",
        "Coordinated multi-stakeholder outreach and reporting",
      ],
      skills: ["Project Management", "Communication", "Documentation", "Stakeholder Management"],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-6">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 h-full hover:border-blue-400/50 hover:shadow-[0_10px_40px_rgba(147,51,234,0.2)]">
                <CardHeader className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20 p-4 hover:from-blue-500/30 hover:to-indigo-500/30 transition-all duration-300">
                  <CardTitle className="text-xl text-blue-50 mb-2 font-bold">{exp.title}</CardTitle>
                  <div className="text-base text-blue-200 space-y-1">
                    <div className="flex items-center space-x-1">
                      <Building className="w-4 h-4" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <ul className="space-y-2 mb-4">
                    {exp.achievements.slice(0, 2).map((achievement, i) => (
                      <li key={i} className="text-blue-200 text-sm leading-relaxed flex items-start space-x-3">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.slice(0, 3).map((skill, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-100 text-xs px-3 py-1 hover:bg-blue-500/40 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
