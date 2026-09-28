import { EditorialPhoto } from "@/components/editorial-photo"
import { Footer } from "@/components/footer"
import { FounderSection } from "@/components/founder"
import { Hero } from "@/components/hero"
import { HowWeWork } from "@/components/how-we-work"
import { Positioning } from "@/components/positioning"
import { Services } from "@/components/services"
import { Testimonials } from "@/components/testimonials"
import { WhoWeHelp } from "@/components/who-we-help"

export default function Page() {
  return (
    <main className="site-canvas" id="main-content">
      <Hero />
      <Positioning />
      <EditorialPhoto
        variant="bleed"
        src="/images/project-site.png"
        alt="Tunnel portal and bridge under construction beside a lake, surrounded by pine forest"
        label="Complex delivery"
        caption="Major programmes need cost, schedule, and delivery in one view."
      />
      <Services />
      <HowWeWork />
      <WhoWeHelp />
      <FounderSection variant="teaser" />
      <Testimonials />
      <Footer />
    </main>
  )
}
