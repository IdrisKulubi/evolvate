import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import { Footer } from "@/components/footer"
import { InteriorHeader } from "@/components/interior-header"

export const metadata: Metadata = {
  title: "About Evolvate Consulting",
  description:
    "Meet Evolvate Consulting and the principles behind our approach to business growth, financial clarity, and project delivery.",
}

const principles = [
  {
    title: "We listen across the business.",
    body: "The useful answer rarely lives in one department. We bring commercial ambition, financial reality, and delivery constraints into the same conversation.",
  },
  {
    title: "We make choices explicit.",
    body: "A strategy becomes valuable when leaders can see the trade-offs, choose a direction, and explain why it is worth pursuing.",
  },
  {
    title: "We stay close to the work.",
    body: "The engagement does not end at the recommendation. We help turn the decision into ownership, sequence, and measurable movement.",
  },
] as const

export default function AboutPage() {
  return (
    <main className="interior-page" id="main-content">
      <InteriorHeader current="about" />

      <section className="about-hero" aria-labelledby="about-title">
        <p>About Evolvate</p>
        <h1 id="about-title">
          Good advice should make the work <em>clearer.</em>
        </h1>
        <div className="about-hero-copy">
          <p>
            Evolvate is a consulting partner for leaders navigating growth,
            financial pressure, and complex delivery.
          </p>
          <p>
            We connect strategy to the numbers and the people responsible for
            making it happen—so progress is practical, visible, and owned.
          </p>
        </div>
      </section>

      <section className="about-statement" aria-label="Our point of view">
        <p>The business does not need more slides.</p>
        <h2>It needs a decision it can use on Monday morning.</h2>
      </section>

      <section className="about-principles" aria-labelledby="principles-title">
        <header>
          <h2 id="principles-title">What working with us feels like</h2>
          <p>Clear thinking, candid conversations, and momentum that lasts.</p>
        </header>
        <div className="about-principle-list">
          {principles.map((principle) => (
            <article key={principle.title}>
              <h3>{principle.title}</h3>
              <p>{principle.body}</p>
            </article>
          ))}
        </div>
        <Link className="about-contact-link" href="/contact">
          Start a conversation
          <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
        </Link>
      </section>

      <Footer />
    </main>
  )
}
