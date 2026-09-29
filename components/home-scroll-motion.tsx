"use client"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import {
  REVEAL,
  fromHidden,
  fromHiddenSoft,
  scrollEnter,
} from "@/lib/motion/reveal"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export function HomeScrollMotion() {
  useGSAP(() => {
    const scope = document.getElementById("main-content")
    if (!scope) return

    const mm = gsap.matchMedia()

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      const ctx = gsap.context(() => {
        const heroTimeline = gsap.timeline({
          defaults: { ease: REVEAL.ease },
          delay: 0.08,
        })

        heroTimeline
          .from(".hero-eyebrow", { ...fromHiddenSoft, duration: 0.75 })
          .from(".hero h1", { ...fromHidden, duration: 1.05 }, "-=0.55")
          .from(
            ".hero-description",
            { ...fromHiddenSoft, duration: 0.9 },
            "-=0.7"
          )
          .from(
            ".hero-content .consultation-button",
            {
              y: 22,
              autoAlpha: 0,
              scale: 0.98,
              duration: 0.85,
              ease: REVEAL.ease,
            },
            "-=0.62"
          )
          .from(
            ".hero-audience",
            { y: 16, autoAlpha: 0, duration: 0.7 },
            "-=0.5"
          )

        const positioning = scope.querySelector(".positioning")
        if (positioning) {
          gsap
            .timeline({
              scrollTrigger: scrollEnter(positioning),
              defaults: { ease: REVEAL.ease },
            })
            .from(".positioning-intro > p", { ...fromHiddenSoft, duration: 0.8 })
            .from(".positioning-intro h2", { ...fromHidden, duration: 1.05 }, "-=0.62")

          gsap.utils
            .toArray<HTMLElement>(".positioning-editorial > article")
            .forEach((article, index) => {
              const xOffset = index === 0 ? -36 : index === 2 ? 36 : 0

              gsap.from(article, {
                x: xOffset,
                y: 56,
                autoAlpha: 0,
                duration: 1.1,
                ease: REVEAL.ease,
                scrollTrigger: scrollEnter(article, REVEAL.blockStart),
              })
            })

          const positioningClose = scope.querySelector(".positioning-close")
          if (positioningClose) {
            gsap.from(".positioning-close > p, .positioning-close-action", {
              ...fromHiddenSoft,
              stagger: 0.1,
              scrollTrigger: scrollEnter(positioningClose, REVEAL.blockStart),
            })
          }
        }

        const founder = scope.querySelector(".founder-teaser")
        if (founder) {
          gsap
            .timeline({
              scrollTrigger: scrollEnter(founder),
              defaults: { ease: REVEAL.ease },
            })
            .from(".founder-teaser-photo", {
              scale: 1.06,
              autoAlpha: 0,
              duration: 1.1,
              ease: "power3.out",
            })
            .from(
              ".founder-teaser-copy > p:first-child",
              { ...fromHiddenSoft, duration: 0.75 },
              "-=0.75"
            )
            .from(
              ".founder-teaser-copy h2",
              { ...fromHidden, duration: 0.95 },
              "-=0.55"
            )
            .from(
              ".founder-teaser-role",
              { y: 20, autoAlpha: 0, duration: 0.75 },
              "-=0.65"
            )
            .from(
              ".founder-teaser-copy > p:nth-of-type(3)",
              { ...fromHiddenSoft, duration: 0.85 },
              "-=0.55"
            )
            .from(
              ".founder-teaser-credentials li",
              { y: 18, autoAlpha: 0, duration: 0.65, stagger: 0.08 },
              "-=0.45"
            )
            .from(
              ".founder-teaser-link",
              { y: 16, autoAlpha: 0, duration: 0.7 },
              "-=0.35"
            )
        }

        const services = scope.querySelector("#services")
        if (services) {
          gsap
            .timeline({
              scrollTrigger: scrollEnter(services),
              defaults: { ease: REVEAL.ease },
            })
            .from(".services-intro h2", { ...fromHidden, duration: 1.05 })
            .from(
              ".services-intro-copy",
              { ...fromHiddenSoft, duration: 0.9 },
              "-=0.68"
            )
            .from(
              ".services .editorial-photo",
              {
                y: 48,
                scale: 1.03,
                autoAlpha: 0,
                duration: 1.15,
                ease: "power3.out",
              },
              "-=0.55"
            )
        }

        const testimonialsSection = scope.querySelector(".testimonials")
        if (testimonialsSection) {
          gsap
            .timeline({
              scrollTrigger: scrollEnter(testimonialsSection),
              defaults: { ease: REVEAL.ease },
            })
            .from(".testimonials-intro > p", { ...fromHiddenSoft, duration: 0.75 })
            .from(
              ".testimonials-intro h2",
              { ...fromHidden, duration: 1 },
              "-=0.55"
            )
            .from(
              ".testimonials-demo-note",
              { y: 18, autoAlpha: 0, duration: 0.7 },
              "-=0.65"
            )
        }

        const footer = scope.querySelector(".site-footer")
        if (footer) {
          gsap
            .timeline({
              scrollTrigger: scrollEnter(footer, REVEAL.blockStart),
              defaults: { ease: REVEAL.ease },
            })
            .from(".footer-invitation > div > p", {
              ...fromHiddenSoft,
              duration: 0.75,
            })
            .from(".footer-invitation h2", { ...fromHidden, duration: 1.05 }, "-=0.55")
            .from(
              ".footer-invitation .footer-cta",
              {
                y: 22,
                autoAlpha: 0,
                scale: 0.98,
                duration: 0.85,
              },
              "-=0.62"
            )
        }

        const refresh = () => ScrollTrigger.refresh()
        window.addEventListener("load", refresh, { once: true })
        return () => window.removeEventListener("load", refresh)
      }, scope)

      return () => ctx.revert()
    })

    return () => mm.revert()
  })

  return null
}
