"use client"

import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { ConsultationTrigger } from "@/components/consultation-trigger"
import { REVEAL, fromHidden, fromHiddenSoft, scrollEnter } from "@/lib/motion/reveal"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const phases = [
  {
    title: "Frame the decision",
    description:
      "We align on the choice to explore, what success looks like, and who should be involved.",
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
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        if (!sectionRef.current) return

        const timeline = gsap.timeline({
          defaults: { ease: REVEAL.ease },
          scrollTrigger: scrollEnter(sectionRef.current),
        })

        timeline
          .from(".work-simple-eyebrow", { ...fromHiddenSoft, duration: 0.75 })
          .from(".work-simple-aside h2", { ...fromHidden, duration: 1.05 }, "-=0.55")
          .from(".work-simple-lead", { ...fromHiddenSoft, duration: 0.85 }, "-=0.65")
          .from(
            ".work-simple-note",
            { y: 32, autoAlpha: 0, duration: 0.9 },
            "-=0.55"
          )
          .fromTo(
            ".work-simple-rail",
            { scaleY: 0, transformOrigin: "top center" },
            { scaleY: 1, duration: 1.15, ease: "power2.inOut" },
            "-=0.35"
          )
          .from(
            ".work-simple-row",
            {
              y: 40,
              autoAlpha: 0,
              duration: 0.85,
              stagger: {
                each: 0.14,
                from: "start",
              },
            },
            "<0.05"
          )
          .from(
            ".work-simple-index",
            {
              scale: 0.6,
              autoAlpha: 0,
              duration: 0.55,
              stagger: 0.14,
              ease: "back.out(1.4)",
            },
            "<"
          )
      })

      return () => mm.revert()
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
              Start a conversation
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
