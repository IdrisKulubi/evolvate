import { Hero } from "@/components/hero"
import { Positioning } from "@/components/positioning"
import { Services } from "@/components/services"

export default function Page() {
  return (
    <main className="site-canvas" id="main-content">
      <Hero />
      <Positioning />
      <Services />
    </main>
  )
}
