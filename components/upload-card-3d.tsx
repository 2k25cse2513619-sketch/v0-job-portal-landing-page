"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Upload, FileText, Sparkles, Shield, Zap, CheckCircle2 } from "lucide-react"
import { useState, useRef } from "react"

export function UploadCard3D() {
  const [isDragging, setIsDragging] = useState(false)
  const [isHovering, setIsHovering] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Motion values for cursor tracking
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Spring configs for smooth animations
  const springConfig = { damping: 20, stiffness: 300 }
  const springConfigSlow = { damping: 30, stiffness: 150 }

  // Transform mouse position to rotation values
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), springConfig)

  // Parallax transforms for inner elements (moving at different speeds)
  const parallaxX1 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfigSlow)
  const parallaxY1 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), springConfigSlow)
  const parallaxX2 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-40, 40]), springConfigSlow)
  const parallaxY2 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-40, 40]), springConfigSlow)
  const parallaxX3 = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfigSlow)
  const parallaxY3 = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfigSlow)

  // Glow position for holographic effect
  const glowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [0, 100]), springConfig)
  const glowY = useSpring(useTransform(mouseY, [-0.5, 0.5], [0, 100]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div className="perspective-[1500px] w-full">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onDragEnter={() => setIsDragging(true)}
        onDragLeave={() => setIsDragging(false)}
        onDragOver={(e) => e.preventDefault()}
        onDrop={() => setIsDragging(false)}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovering ? 1.02 : 1,
        }}
        transition={{
          scale: { type: "spring", damping: 20, stiffness: 300 },
        }}
        className={`relative backdrop-blur-xl bg-card/70 rounded-3xl border overflow-hidden cursor-pointer transition-colors duration-500 ${
          isDragging
            ? "border-primary shadow-2xl shadow-primary/40"
            : "border-border/50"
        }`}
      >
        {/* Dynamic glow/reflection layer */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `radial-gradient(circle at ${x}% ${y}%, oklch(0.6 0.22 250 / 0.25) 0%, transparent 50%)`
            ),
          }}
        />

        {/* Holographic sheen overlay */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-10 opacity-0"
          animate={{ opacity: isHovering ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: useTransform(
              [glowX, glowY],
              ([x, y]) =>
                `linear-gradient(${135 + (x as number) * 0.5}deg, 
                  transparent 20%, 
                  oklch(0.7 0.15 250 / 0.15) 40%, 
                  oklch(0.8 0.1 280 / 0.1) 50%, 
                  oklch(0.7 0.15 220 / 0.15) 60%, 
                  transparent 80%)`
            ),
          }}
        />

        {/* Animated gradient background - parallax layer 1 */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            x: parallaxX1,
            y: parallaxY1,
            background:
              "radial-gradient(ellipse at 20% 20%, oklch(0.6 0.22 250 / 0.15) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, oklch(0.65 0.18 250 / 0.1) 0%, transparent 50%)",
          }}
        />

        {/* Secondary gradient layer - parallax layer 2 */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          style={{
            x: parallaxX2,
            y: parallaxY2,
          }}
        >
          <div className="absolute top-10 right-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-accent/15 rounded-full blur-2xl" />
        </motion.div>

        {/* Card content */}
        <div className="relative z-20 p-8 md:p-12">
          <div className="space-y-8 text-center">
            {/* Floating decorative icons - parallax layer 3 */}
            <motion.div
              className="absolute top-4 left-6 opacity-30"
              style={{ x: parallaxX3, y: parallaxY3 }}
            >
              <Sparkles className="w-5 h-5 text-primary" />
            </motion.div>
            <motion.div
              className="absolute top-8 right-8 opacity-20"
              style={{ x: useTransform(parallaxX3, (v) => v * -1), y: parallaxY3 }}
            >
              <CheckCircle2 className="w-4 h-4 text-primary" />
            </motion.div>
            <motion.div
              className="absolute bottom-20 left-4 opacity-25"
              style={{ x: parallaxX3, y: useTransform(parallaxY3, (v) => v * -1) }}
            >
              <Zap className="w-4 h-4 text-accent" />
            </motion.div>

            {/* Upload icon with 3D depth */}
            <motion.div
              style={{
                x: parallaxX1,
                y: parallaxY1,
                transformStyle: "preserve-3d",
              }}
              animate={{
                translateZ: isHovering ? 30 : 0,
              }}
              className="relative"
            >
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mx-auto w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 shadow-lg shadow-primary/10"
              >
                <Upload
                  className="w-12 h-12 text-primary"
                  style={{
                    filter: "drop-shadow(0 0 12px oklch(0.6 0.22 250 / 0.6))",
                  }}
                />
              </motion.div>
              {/* Glow ring */}
              <motion.div
                className="absolute inset-0 mx-auto w-24 h-24 rounded-2xl"
                animate={{
                  boxShadow: isHovering
                    ? "0 0 40px oklch(0.6 0.22 250 / 0.4), 0 0 80px oklch(0.6 0.22 250 / 0.2)"
                    : "0 0 20px oklch(0.6 0.22 250 / 0.2), 0 0 40px oklch(0.6 0.22 250 / 0.1)",
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Title and description with parallax */}
            <motion.div
              className="space-y-3"
              style={{
                x: useTransform(parallaxX1, (v) => v * 0.5),
                y: useTransform(parallaxY1, (v) => v * 0.5),
              }}
            >
              <motion.h3
                className="text-3xl font-bold text-foreground"
                animate={{
                  translateZ: isHovering ? 20 : 0,
                }}
                style={{
                  transformStyle: "preserve-3d",
                  textShadow: isHovering
                    ? "0 0 30px oklch(0.6 0.22 250 / 0.3)"
                    : "none",
                }}
              >
                Upload Your Resume
              </motion.h3>
              <p className="text-muted-foreground text-lg max-w-sm mx-auto">
                Drag & drop your resume here or click to browse your files
              </p>
            </motion.div>

            {/* File format badges */}
            <motion.div
              className="flex flex-wrap items-center justify-center gap-3"
              style={{
                x: useTransform(parallaxX2, (v) => v * 0.3),
                y: useTransform(parallaxY2, (v) => v * 0.3),
              }}
            >
              {["PDF", "DOC", "DOCX", "TXT"].map((format, i) => (
                <motion.div
                  key={format}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/80 border border-border/50 text-sm font-medium text-foreground"
                >
                  <FileText className="w-4 h-4 text-primary" />
                  <span>{format}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Upload button with enhanced hover */}
            <motion.div
              style={{
                x: useTransform(parallaxX1, (v) => v * 0.2),
                y: useTransform(parallaxY1, (v) => v * 0.2),
              }}
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-5 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold text-lg rounded-2xl transition-all duration-300 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/35 relative overflow-hidden group"
              >
                {/* Button shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                />
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <Upload className="w-5 h-5" />
                  Choose File
                </span>
              </motion.button>
            </motion.div>

            {/* Security badges */}
            <motion.div
              className="flex items-center justify-center gap-6 pt-2"
              style={{
                x: useTransform(parallaxX3, (v) => v * 0.5),
                y: useTransform(parallaxY3, (v) => v * 0.5),
              }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Shield className="w-4 h-4 text-primary" />
                <span>256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                <span>Instant Analysis</span>
              </div>
            </motion.div>

            {/* File size info */}
            <p className="text-sm text-muted-foreground/70">
              Maximum file size: 10MB
            </p>
          </div>
        </div>

        {/* Bottom edge glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-px"
          animate={{
            background: isHovering
              ? "linear-gradient(90deg, transparent, oklch(0.6 0.22 250 / 0.6), transparent)"
              : "linear-gradient(90deg, transparent, oklch(0.6 0.22 250 / 0.3), transparent)",
          }}
        />
      </motion.div>

      {/* Expanded shadow on hover */}
      <motion.div
        className="absolute inset-0 -z-10 rounded-3xl"
        animate={{
          boxShadow: isHovering
            ? "0 25px 80px -15px oklch(0.6 0.22 250 / 0.25), 0 15px 40px -10px oklch(0.6 0.22 250 / 0.15)"
            : "0 10px 40px -10px oklch(0.6 0.22 250 / 0.1)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      />
    </div>
  )
}
