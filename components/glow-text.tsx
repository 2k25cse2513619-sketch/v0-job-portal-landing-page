"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState } from "react"

interface GlowTextProps {
  children: string
  className?: string
  glowColor?: string
}

export function GlowText({
  children,
  className = "",
  glowColor = "oklch(0.6 0.22 250)",
}: GlowTextProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const glowX = useSpring(mouseX, { stiffness: 500, damping: 30 })
  const glowY = useSpring(mouseY, { stiffness: 500, damping: 30 })

  const glowOpacity = useSpring(isHovering ? 1 : 0, {
    stiffness: 300,
    damping: 30,
  })

  const textShadowBlur = useTransform(glowOpacity, [0, 1], [0, 30])
  const textShadowSpread = useTransform(glowOpacity, [0, 1], [0, 60])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    mouseX.set(x)
    mouseY.set(y)
  }

  return (
    <motion.span
      ref={ref}
      className={`relative inline-block cursor-default ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{
        textShadow: useTransform(
          [textShadowBlur, textShadowSpread],
          ([blur, spread]) =>
            `0 0 ${blur}px ${glowColor}, 0 0 ${spread}px ${glowColor}`
        ),
      }}
    >
      {/* Glow spotlight that follows cursor */}
      <motion.span
        className="absolute pointer-events-none rounded-full"
        style={{
          width: 120,
          height: 120,
          x: useTransform(glowX, (x) => x - 60),
          y: useTransform(glowY, (y) => y - 60),
          background: `radial-gradient(circle, ${glowColor} / 0.4 0%, transparent 70%)`,
          opacity: glowOpacity,
          filter: "blur(20px)",
        }}
      />
      {children}
    </motion.span>
  )
}

interface GlowHeadingProps {
  children: React.ReactNode
  className?: string
}

export function GlowHeading({ children, className = "" }: GlowHeadingProps) {
  return (
    <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground ${className}`}>
      {children}
    </h1>
  )
}
