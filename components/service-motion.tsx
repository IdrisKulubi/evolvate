"use client"

import { useRef, type ReactNode } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { REVEAL, scrollEnter } from "@/lib/motion/reveal"

gsap.registerPlugin(useGSAP, ScrollTrigger)

type ServiceMotionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function ServiceMotion({ children, className, id }: ServiceMotionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const rows = gsap.utils.toArray<HTMLElement>("[data-service-row]")

        rows.forEach((row, rowIndex) => {
          const rule = row.querySelector<HTMLElement>("[data-service-rule]")
          const parts = row.querySelectorAll<HTMLElement>("[data-service-part]")

          if (!rule || parts.length === 0) return

          gsap.set(rule, { scaleX: 0, transformOrigin: "left center" })

          gsap
            .timeline({
              scrollTrigger: scrollEnter(row, REVEAL.blockStart),
              defaults: { ease: REVEAL.ease },
            })
            .to(rule, {
              scaleX: 1,
              duration: 0.85,
              ease: "power2.inOut",
            })
            .from(
              parts,
              {
                y: 32,
                autoAlpha: 0,
                duration: 0.75,
                stagger: {
                  each: 0.08,
                  from: rowIndex % 2 === 0 ? "start" : "end",
                },
              },
              "-=0.42"
            )
        })

        const servicesFooter = sectionRef.current?.querySelector(
          ".services-footer"
        )
        if (servicesFooter) {
          gsap.from(".services-footer > p, .services-action", {
            y: REVEAL.liftSoft,
            autoAlpha: 0,
            duration: REVEAL.duration * 0.85,
            ease: REVEAL.ease,
            stagger: 0.1,
            scrollTrigger: scrollEnter(servicesFooter, REVEAL.blockStart),
          })
        }
      })

      return () => mm.revert()
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className={className}
      id={id}
      aria-labelledby="services-title"
    >
      {children}
    </section>
  )
}
