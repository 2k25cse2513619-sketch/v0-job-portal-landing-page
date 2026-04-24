"use client"

import { motion } from "framer-motion"
import { Upload, FileText, Sparkles } from "lucide-react"
import { useState } from "react"

export function HeroSection() {
  const [isDragging, setIsDragging] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                AI-Powered Job Portal
              </span>
            </motion.div>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground"
              style={{
                textShadow: "0 0 40px oklch(0.6 0.22 250 / 0.3)",
              }}
            >
              <span className="text-balance">
                Speak the{" "}
                <span
                  className="text-primary"
                  style={{
                    textShadow:
                      "0 0 20px oklch(0.6 0.22 250 / 0.5), 0 0 40px oklch(0.6 0.22 250 / 0.3)",
                  }}
                >
                  Recruiter&apos;s
                </span>{" "}
                Language.
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed text-pretty">
              Our AI-powered analyzer translates your unique experience into the
              specific technical signals recruiters are looking for. Don&apos;t
              just apply—get recognized.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <button className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20">
              Get Started Free
            </button>
            <button className="px-8 py-4 border border-border text-foreground font-semibold rounded-xl hover:bg-secondary transition-all duration-300">
              Watch Demo
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-6 pt-4"
          >
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 border-2 border-background flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-primary">
                    {String.fromCharCode(64 + i)}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">10,000+</span>{" "}
              professionals already using our platform
            </div>
          </motion.div>
        </motion.div>

        {/* Right Content - Upload Zone */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <div
            className={`relative backdrop-blur-xl bg-card/60 rounded-3xl border transition-all duration-500 p-8 md:p-12 ${
              isDragging
                ? "border-primary shadow-2xl shadow-primary/30 scale-[1.02]"
                : "border-border/50 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10"
            }`}
            onDragEnter={() => setIsDragging(true)}
            onDragLeave={() => setIsDragging(false)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => setIsDragging(false)}
          >
            {/* Glass effect overlay */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />

            <div className="relative space-y-6 text-center">
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center"
              >
                <Upload
                  className="w-10 h-10 text-primary"
                  style={{
                    filter: "drop-shadow(0 0 8px oklch(0.6 0.22 250 / 0.5))",
                  }}
                />
              </motion.div>

              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">
                  Upload Your Resume
                </h3>
                <p className="text-muted-foreground">
                  Drag & drop your PDF here or click to browse
                </p>
              </div>

              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  <span>PDF, DOC, DOCX</span>
                </div>
                <span>•</span>
                <span>Max 10MB</span>
              </div>

              <button className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/20">
                Choose File
              </button>

              <p className="text-xs text-muted-foreground">
                Your data is encrypted and secure
              </p>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  )
}
