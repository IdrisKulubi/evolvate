"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const phases = [
  {
    title: "Frame the decision",
    description:
      "We agree on the exact choice to make, what success means, and who needs to be involved.",
  },
  {
    title: "Build the evidence",
    description:
      "Research, financial analysis, and operational insight replace assumptions with a clearer picture.",
  },
  {
    title: "Choose the direction",
    description:
      "We put the strongest options side by side so the trade-offs and the best route are visible.",
  },
  {
    title: "Put it to work",
    description:
      "The decision becomes a practical plan with owners, resources, controls, and a review rhythm.",
  },
] as const

export function HowWeWork() {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches

      if (reduceMotion) return

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
          once: true,
        },
      })

      timeline
        .fromTo(
          ".work-simple-visual",
          { y: 20, autoAlpha: 0.6 },
          { y: 0, autoAlpha: 1, duration: 0.65 }
        )
        .fromTo(
          ".work-simple-row",
          { y: 14, autoAlpha: 0.55 },
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.08 },
          "-=0.38"
        )
    },
    { scope: sectionRef }
  )

  return (
    <section
      className="how-we-work how-we-work-simple"
      id="how-we-work"
      ref={sectionRef}
      aria-labelledby="how-we-work-title"
    >
      <div className="work-simple-layout">
        <div className="work-simple-visual" aria-hidden="true">
          <div className="work-brief">
            <div className="work-brief-meta">
              <span>Evolvate working brief</span>
              <span>Shared with your team</span>
            </div>
            <h3>From a difficult question to a decision people can act on.</h3>
            <div className="work-brief-flow">
              {phases.map((phase, index) => (
                <div key={phase.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{phase.title}</p>
                  <i aria-hidden="true" />
                </div>
              ))}
            </div>
            <p className="work-brief-result">
              Clear direction
              <span>Evidence · ownership · movement</span>
            </p>
          </div>
        </div>

        <div className="work-simple-content">
          <h2 id="how-we-work-title">How we work</h2>
          <p className="work-simple-lead">
            A clear method, shaped around the decision your business needs to
            make.
          </p>

          <ol className="work-simple-list">
            {phases.map((phase, index) => (
              <li className="work-simple-row" key={phase.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
