"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Brain, Globe, BookOpen, Zap } from "lucide-react"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Smart Study Assistant",
      subtitle: "Agentic AI System",
      duration: "Dec 2025",
      description:
        "Engineered an Agentic AI system to autonomously parse content and generate structured study aids. Developed a multi-agent pipeline using Gemini API to extract context, generate summaries, and create quiz modules.",
      features: ["Context retention across long documents", "Multi-agent pipeline", "Analytics dashboard"],
      technologies: ["React", "TypeScript", "Gemini API", "RAG Pipeline"],
      icon: Zap,
      gradient: "from-orange-500 to-red-500",
      githubUrl: "https://github.com/NAMITHA-L/Smart-study-assistant-",
      liveUrl: "https://smart-study-assistant-agent-lgpw9gwli-namitha-ls-projects.vercel.app/",
    },
    {
      title: "Gender Bias Analyzer",
      subtitle: "LLM & Comparison",
      duration: "May 2025",
      description:
        "Comprehensive comparison of AI models for bias detection. Built a Mistral-based pipeline with multi-model evaluation capabilities for analyzing and rewriting biased content patterns.",
      features: ["Model comparison framework", "Bias pattern analysis", "Content rewriting engine"],
      technologies: ["LLM", "Python", "NLP", "Model Evaluation"],
      icon: Brain,
      gradient: "from-indigo-500 to-purple-500",
      githubUrl: "https://github.com/NAMITHA-L/GENDER-BIAS-ANALYSIS---COMPARISON-OF-AI-MODELS/tree/main",
    },
    {
      title: "STU-END",
      subtitle: "Productivity & Scheduling Engine",
      duration: "Jan–Feb 2025",
      description:
        "Built a lightweight, responsive web application for daily task tracking and timetable management. Implemented custom scheduling logic with persistent state management and mobile-first design.",
      features: ["Dynamic schedule management", "Task prioritization", "Responsive interface"],
      technologies: ["React.js", "Tailwind CSS", "LocalStorage", "JavaScript"],
      icon: Globe,
      gradient: "from-blue-500 to-cyan-500",
      githubUrl: "https://github.com/NAMITHA-L/STU-END",
      liveUrl: "https://stu-m1qhrpn9p-namitha-ls-projects.vercel.app/",
    },
    {
      title: "Book Chapter Publication",
      subtitle: "Multimodal Data Processing",
      duration: "2024",
      description:
        "Co-authored a book chapter on LLMs and collaborative AI architectures. Contributing to the academic community with research on multimodal data processing and multi-agent systems.",
      features: ["Multimodal data processing", "Multi-agent systems", "Academic research"],
      technologies: ["Research", "LLM", "AI", "Academic Writing"],
      icon: BookOpen,
      gradient: "from-orange-500 to-red-500",
      githubUrl: null,
      publicationUrl: "https://www.igi-global.com/gateway/chapter/389181#pnlRecommendationForm",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-6">
            Projects & Publications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0, rotateX: -10 }}
              whileInView={{ y: 0, opacity: 1, rotateX: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, rotateY: 5 }}
              className="group"
            >
              <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 h-full overflow-hidden">
                <CardHeader
                  className={`bg-gradient-to-r ${project.gradient} bg-opacity-20 p-4 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 bg-gradient-to-r ${project.gradient} rounded-lg`}>
                        <project.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-blue-200 text-xs">{project.duration}</span>
                    </div>
                    <CardTitle className="text-lg text-blue-100 mb-1">{project.title}</CardTitle>
                    <p className="text-blue-200 text-xs">{project.subtitle}</p>
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <p className="text-blue-100 mb-3 text-sm">{project.description}</p>
                  <ul className="space-y-1 mb-4">
                    {project.features.slice(0, 2).map((feature, i) => (
                      <li key={i} className="text-blue-200 text-xs flex items-start space-x-2">
                        <span
                          className={`w-1 h-1 bg-gradient-to-r ${project.gradient} rounded-full mt-1.5 flex-shrink-0`}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <Badge
                        key={i}
                        variant="secondary"
                        className={`bg-gradient-to-r ${project.gradient} bg-opacity-20 text-white text-xs px-2 py-1`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-400 text-blue-100 hover:bg-blue-500/20 flex-1 bg-transparent text-xs py-2"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-400 text-blue-100 hover:bg-blue-500/20 flex-1 bg-transparent text-xs py-2"
                        onClick={() => window.open(project.liveUrl, "_blank")}
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Live
                      </Button>
                    )}
                    {project.publicationUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-blue-400 text-blue-100 hover:bg-blue-500/20 flex-1 bg-transparent text-xs py-2"
                        onClick={() => window.open(project.publicationUrl, "_blank")}
                      >
                        <BookOpen className="w-4 h-4 mr-2" />
                        Read
                      </Button>
                    )}
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
