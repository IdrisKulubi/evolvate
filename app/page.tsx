import { Footer } from "@/components/footer"
import { FounderSection } from "@/components/founder"
import { Hero } from "@/components/hero"
import { HomeScrollMotion } from "@/components/home-scroll-motion"
import { HowWeWork } from "@/components/how-we-work"
import { Positioning } from "@/components/positioning"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"

export default function Page() {
  return (
    <main className="site-canvas" id="main-content">
      <HomeScrollMotion />
      <Hero />
      <Positioning />
      <FounderSection variant="teaser" />
      <Services />
      <HowWeWork />
      <Testimonials />
      <Footer />
    </main>
  )
}
