"use client"

import { useRef } from "react"
import { ArrowUpRight } from "@phosphor-icons/react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { ConsultationTrigger } from "@/components/consultation-trigger"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const phases = [
  {
    title: "Frame the decision",
    description:
      "We align on the choice to explore, what success could look like, and who should be involved.",
    deliverable: "A short brief agreeing scope, key questions, and people.",
  },
  {
    title: "Build the evidence",
    description:
      "Research, financial analysis, and operational insight help replace assumptions with a clearer picture.",
    deliverable: "Analysis of the market, financial, and operational facts.",
  },
  {
    title: "Compare the options",
    description:
      "We lay out strong options so trade-offs and a preferred route are easier to discuss.",
    deliverable: "A side-by-side view of options, costs, and risks.",
  },
  {
    title: "Support implementation",
    description:
      "We help turn the decision into a practical plan with owners, resources, controls, and review.",
    deliverable: "A working plan with owners, milestones, and review points.",
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
          ".work-simple-aside",
          { y: 20, autoAlpha: 0.6 },
          { y: 0, autoAlpha: 1, duration: 0.65 }
        )
        .fromTo(
          ".work-simple-rail",
          { scaleY: 0 },
          { scaleY: 1, duration: 1.1, ease: "power2.inOut" },
          "-=0.4"
        )
        .fromTo(
          ".work-simple-row",
          { y: 14, autoAlpha: 0.55 },
          { y: 0, autoAlpha: 1, duration: 0.5, stagger: 0.12 },
          "<0.1"
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
        <div className="work-simple-aside">
          <p className="work-simple-eyebrow">Our approach</p>
          <h2 id="how-we-work-title">How we work</h2>
          <p className="work-simple-lead">
            A structured approach, adapted to the decision your business is
            facing. Four steps, each with something concrete to show for it.
          </p>

          <div className="work-simple-note">
            <p>
              Every engagement starts by agreeing what is realistic, before any
              work begins.
            </p>
            <ConsultationTrigger className="work-simple-action">
              Talk through your situation
              <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
            </ConsultationTrigger>
          </div>
        </div>

        <div className="work-simple-steps">
          <span className="work-simple-rail" aria-hidden="true" />
          <ol className="work-simple-list">
            {phases.map((phase, index) => (
              <li className="work-simple-row" key={phase.title}>
                <span className="work-simple-index" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{phase.title}</h3>
                  <p>{phase.description}</p>
                  <p className="work-simple-deliverable">
                    <span>You receive</span>
                    {phase.deliverable}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
