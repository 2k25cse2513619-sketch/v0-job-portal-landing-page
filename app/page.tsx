import { FloatingIcons } from "@/components/floating-icons"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeatureGrid } from "@/components/feature-grid"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Floating Background Icons */}
      <FloatingIcons />

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <div className="pt-16">
          <HeroSection />
          <FeatureGrid />
          <Footer />
        </div>
      </div>
    </main>
  )
}
