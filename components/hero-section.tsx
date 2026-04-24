"use client"

import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"
import { UploadCard3D } from "./upload-card-3d"
import { GlowText, GlowHeading } from "./glow-text"

export function HeroSection() {

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

            <GlowHeading>
              <span className="text-balance">
                <GlowText>Speak</GlowText>{" "}
                <GlowText>the</GlowText>{" "}
                <GlowText className="text-primary">Recruiter&apos;s</GlowText>{" "}
                <GlowText>Language.</GlowText>
              </span>
            </GlowHeading>

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

        {/* Right Content - 3D Upload Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative"
        >
          <UploadCard3D />

          {/* Decorative elements */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-accent/20 rounded-full blur-3xl pointer-events-none" />
        </motion.div>
      </div>
    </section>
  )
}
