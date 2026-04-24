"use client"

import { motion } from "framer-motion"
import { Briefcase } from "lucide-react"

export function Footer() {
  return (
    <footer className="relative py-12 px-4 border-t border-border/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Briefcase
                className="w-5 h-5 text-primary"
                style={{
                  filter: "drop-shadow(0 0 4px oklch(0.6 0.22 250 / 0.4))",
                }}
              />
            </div>
            <span
              className="text-xl font-bold text-foreground"
              style={{
                textShadow: "0 0 20px oklch(0.6 0.22 250 / 0.2)",
              }}
            >
              Job Portal
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
