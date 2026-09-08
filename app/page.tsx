import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { HowWeWork } from "@/components/how-we-work"
import { Positioning } from "@/components/positioning"
import { Services } from "@/components/services"
import { WhoWeHelp } from "@/components/who-we-help"

export default function Page() {
  return (
    <main className="site-canvas" id="main-content">
      <Hero />
      <Positioning />
      <Services />
      <HowWeWork />
      <WhoWeHelp />
      <Footer />
    </main>
  )
}
