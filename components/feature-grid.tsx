"use client"

import { motion } from "framer-motion"
import {
  MessageSquare,
  Target,
  Send,
  User,
  Home,
  Bot,
  Fingerprint,
  Users,
  History,
  Star,
} from "lucide-react"

const features = [
  {
    icon: MessageSquare,
    title: "P2P Message Box",
    description:
      "Connect directly with recruiters and peers through secure, real-time messaging.",
  },
  {
    icon: Target,
    title: "ATS Scoring & Resume Gen",
    description:
      "Get instant ATS compatibility scores and generate optimized resumes based on job descriptions.",
  },
  {
    icon: Send,
    title: "One-Click Job Apply",
    description:
      "Apply to jobs instantly with our direct mail system—no more repetitive form filling.",
  },
  {
    icon: User,
    title: "Interactive Profile Page",
    description:
      "Showcase your skills, experience, and achievements with a dynamic, shareable profile.",
  },
  {
    icon: Home,
    title: "Home Feed",
    description:
      "Stay updated with achievements, industry thoughts, and professional insights from your network.",
  },
  {
    icon: Bot,
    title: "AI Assistant",
    description:
      "Get personalized recommendations to optimize your resume score and stand out.",
  },
  {
    icon: Fingerprint,
    title: "Unique User ID",
    description:
      "Anti-spam tracking system ensures genuine connections and protects your privacy.",
  },
  {
    icon: Users,
    title: "Networking Hub",
    description:
      "Connect with professionals, mentors, and peers to expand your career opportunities.",
  },
  {
    icon: History,
    title: "Resume Scan History",
    description:
      "Track all your resume analyses and improvements over time with detailed insights.",
  },
  {
    icon: Star,
    title: "Feedback & Rating",
    description:
      "Receive and provide feedback to build trust and improve the community experience.",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
}

export function FeatureGrid() {
  return (
    <section className="relative py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-foreground"
            style={{
              textShadow: "0 0 30px oklch(0.6 0.22 250 / 0.25)",
            }}
          >
            Everything You Need to{" "}
            <span
              className="text-primary"
              style={{
                textShadow:
                  "0 0 20px oklch(0.6 0.22 250 / 0.5), 0 0 40px oklch(0.6 0.22 250 / 0.3)",
              }}
            >
              Land Your Dream Job
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to give you the competitive edge in your
            job search journey.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className={`group relative ${
                index < 5 ? "" : "xl:col-span-1"
              }`}
            >
              <div className="relative h-full backdrop-blur-lg bg-card/70 rounded-2xl border border-border/50 p-6 transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-transparent to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />

                <div className="relative space-y-4">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <feature.icon
                      className="w-6 h-6 text-primary transition-all duration-300 group-hover:scale-110"
                      style={{
                        filter:
                          "drop-shadow(0 0 4px oklch(0.6 0.22 250 / 0.4))",
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
