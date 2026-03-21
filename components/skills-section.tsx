"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, Code, Brain, Database } from "lucide-react"

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "AI & GenAI",
      icon: Brain,
      skills: ["LLMs (Mistral, Gemini, DeepSeek)", "RAG Pipelines", "Prompt Engineering", "NLP", "Model Evaluation"],
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Languages",
      icon: Code,
      skills: ["Python (Advanced)", "C++", "SQL", "Java"],
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "CS Fundamentals",
      icon: Database,
      skills: ["Data Structures & Algorithms", "OOP", "DBMS", "OS", "Concurrency", "Linux (Basic)"],
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Development",
      icon: Code,
      skills: ["React.js", "TypeScript", "AWS (EC2, S3)", "Docker", "Git", "REST APIs"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Soft Skills",
      icon: Sparkles,
      skills: ["Technical Communication", "Rapid Skill Acquisition", "Problem Solving", "Team Collaboration"],
      color: "from-green-500 to-teal-500",
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300 h-full hover:border-blue-400/50 hover:shadow-[0_10px_40px_rgba(147,51,234,0.2)]">
                <CardHeader
                  className={`bg-gradient-to-r ${category.color} bg-opacity-20 p-4 hover:bg-opacity-30 transition-all duration-300`}
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className={`p-3 bg-gradient-to-r ${category.color} rounded-lg hover:shadow-lg transition-all duration-300`}
                    >
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl text-blue-50 font-bold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className={`bg-gradient-to-r ${category.color} bg-opacity-20 text-white text-sm px-4 py-2 hover:bg-opacity-40 hover:shadow-[0_0_15px_rgba(147,51,234,0.3)] transition-all duration-300 border border-white/10 hover:border-white/20`}
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
