"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BookOpen } from "lucide-react"

export default function EducationSection() {
  const certifications = [
    {
      title: "NPTEL Top 5% — Intro to Machine Learning",
      description: "Achieved top 5% ranking in the course",
      icon: Award,
    },
    {
      title: "NLP & Text Mining — SimpliLearn",
      description: "Certification in the fundamentals of NLP and Text Mining",
      icon: BookOpen,
    },
    {
      title: "Python & C++ — Saylor Foundation",
      description: "Certification covering Python and C++ programming languages",
      icon: BookOpen,
    },
    {
      title: "Cybersecurity — IBM SkillsBuild",
      description: "Certification focused on cybersecurity fundamentals",
      icon: Award,
    },
  ]

  return (
    <section id="education" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-6">
            Education & Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
              <CardHeader className="bg-gradient-to-r from-blue-500/20 to-indigo-500/20">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl text-blue-100">B.Tech in Computer Science</CardTitle>
                    <p className="text-blue-200">VIT Bhopal University</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-green-500/20 text-green-100 text-lg px-4 py-2">CGPA: 9.18</Badge>
                  <p className="text-blue-200">Bhopal, MP</p>
                </div>
                <p className="text-blue-100 text-lg">
                  Pursuing Bachelor of Technology in Computer Science Engineering with exceptional academic performance
                  and focus on emerging technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex-shrink-0">
                        <cert.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-blue-100 font-semibold mb-1">{cert.title}</h3>
                        <p className="text-blue-300 text-sm">{cert.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
