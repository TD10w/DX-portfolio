import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { WhatIWantSection } from "@/components/what-i-want-section"
import { NowSection } from "@/components/now-section"
import { TabbedSection } from "@/components/tabbed-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <NowSection />
      <WhatIWantSection />
      <TabbedSection />
      <Footer />
    </main>
  )
}
