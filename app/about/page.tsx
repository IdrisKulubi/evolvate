import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import { Footer } from "@/components/footer"
import { FounderSection } from "@/components/founder"
import { InteriorHeader } from "@/components/interior-header"

export const metadata: Metadata = {
  title: "About Evolvate Consulting",
  description:
    "Meet Evolvate Consulting and the principles behind our approach to business development, financial management, and project delivery in Sweden and internationally.",
}

const principles = [
  {
    title: "We listen across the business.",
    body: "Useful insight rarely sits in one department. We bring commercial ambition, financial reality, and delivery constraints into the same conversation.",
  },
  {
    title: "We make choices explicit.",
    body: "Strategy is more useful when leaders can see trade-offs, choose a direction, and explain why it is worth pursuing.",
  },
  {
    title: "We stay close to the work.",
    body: "Our support does not stop at the recommendation. We help turn decisions into ownership, sequence, and measurable movement.",
  },
] as const

export default function AboutPage() {
  return (
    <main className="interior-page" id="main-content">
      <InteriorHeader current="about" />

      <section className="about-hero" aria-labelledby="about-title">
        <p>About Evolvate</p>
        <h1 id="about-title">
          Clarity, integrity, and work that <em>holds up.</em>
        </h1>
        <div className="about-hero-copy">
          <p>
            We support businesses and organizations in Sweden and internationally
            with strategic business development, financial management, and
            project management solutions. We help clients navigate complex
            challenges, improve performance, and turn strategic priorities into
            measurable results.
          </p>
          <p>
            Our services cover business strategy, financial management, project
            controls, project management, market research, consulting, and
            advisory. We are currently providing project controls services to
            mega projects in Sweden, with a focus on financial management,
            project performance, and project management strategies. Cross-industry
            experience—including aerospace and construction—helps us tailor
            support to complex, evolving environments.
          </p>
        </div>
      </section>

      <FounderSection variant="full" />

      <section className="about-statement" aria-label="Our point of view">
        <p>We believe in clarity, integrity, collaboration, and results.</p>
        <h2>
          By combining business insight, financial expertise, project discipline,
          and technology, we help clients make better decisions and build
          stronger businesses for the future.
        </h2>
      </section>

      <section className="about-principles" aria-labelledby="principles-title">
        <header>
          <h2 id="principles-title">What working with us feels like</h2>
          <p>Clear thinking, candid conversations, and practical momentum.</p>
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
