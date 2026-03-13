import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { WhoAmISection } from "@/components/who-am-i-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ScrollAnimation } from "@/components/scroll-animation"
import { ScrollReset } from "@/components/scroll-reset"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollReset />
      <Navbar />
      <HeroSection />
      <ScrollAnimation>
        <WhoAmISection />
      </ScrollAnimation>
      <ScrollAnimation>
        <RoadmapSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <PortfolioSection />
      </ScrollAnimation>
      <ScrollAnimation>
        <ContactSection />
      </ScrollAnimation>
      <Footer />
    </main>
  )
}
