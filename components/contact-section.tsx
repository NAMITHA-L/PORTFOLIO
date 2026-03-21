"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Send, User, MessageSquare } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          to: "namitha.23bce11620@vitbhopal.ac.in",
        }),
      })

      if (response.ok) {
        setSubmitMessage("Email sent successfully! I'll get back to you soon.")
        setFormData({ name: "", email: "", subject: "", message: "" })
        setTimeout(() => setSubmitMessage(""), 3000)
      } else {
        setSubmitMessage("Failed to send email. Please try again.")
      }
    } catch (error) {
      console.error("Error sending email:", error)
      setSubmitMessage("Error sending email. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-200 to-indigo-200 bg-clip-text text-transparent mb-6">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto rounded-full" />
          <p className="text-blue-200 text-lg mt-6 max-w-2xl mx-auto">
            Let's connect and discuss opportunities to collaborate on exciting projects!
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-blue-100 flex items-center">
                      <User className="w-4 h-4 mr-2" />
                      Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-blue-100 placeholder:text-blue-300 focus:border-blue-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-blue-100 flex items-center">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/20 text-blue-100 placeholder:text-blue-300 focus:border-blue-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-blue-100 flex items-center">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-white/5 border-white/20 text-blue-100 placeholder:text-blue-300 focus:border-blue-400"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-blue-100">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="bg-white/5 border-white/20 text-blue-100 placeholder:text-blue-300 focus:border-blue-400 resize-none"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>
                {submitMessage && (
                  <p
                    className={`text-center text-sm ${submitMessage.includes("successfully") ? "text-green-400" : "text-red-400"}`}
                  >
                    {submitMessage}
                  </p>
                )}
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        {/* Footer with Social Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex justify-center space-x-6 mb-4">
            <a
              href="https://github.com/NAMITHA-L"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 transition-colors duration-300 hover:scale-110 transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/namitha-l-29819128a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:text-blue-100 transition-colors duration-300 hover:scale-110 transform"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="mailto:leninnamitha@gmail.com"
              className="text-blue-300 hover:text-blue-100 transition-colors duration-300 hover:scale-110 transform"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <p className="text-blue-300 text-sm">© 2025 Namitha L. Built with passion and creativity.</p>
        </motion.div>
      </div>
    </section>
  )
}
