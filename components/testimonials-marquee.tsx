"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { Pause, Play } from "@phosphor-icons/react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import type { Testimonial } from "@/lib/content/testimonials"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const PIXELS_PER_SECOND = 40

function getInitials(name: string) {
  const cleaned = name.replace(/\[|\]/g, "")
  const parts = cleaned.split(/\s+/).filter(Boolean)
  if (parts.length === 0) return "?"
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase()
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
}

function MarqueeCard({
  item,
  tabIndex,
}: {
  item: Testimonial
  tabIndex?: number
}) {
  return (
    <figure className="testimonial-marquee-card" tabIndex={tabIndex}>
      <blockquote cite={`#${item.id}`}>
        <p>{item.quote}</p>
      </blockquote>
      <figcaption>
        <span className="testimonial-marquee-avatar" aria-hidden="true">
          {getInitials(item.name)}
        </span>
        <span className="testimonial-marquee-meta">
          <cite>{item.name}</cite>
          <span>
            {item.role} · {item.context}
          </span>
          <span className="testimonial-marquee-service">{item.service}</span>
        </span>
      </figcaption>
    </figure>
  )
}

interface TestimonialsMarqueeProps {
  items: Testimonial[]
  direction?: "ltr" | "rtl"
}

export function TestimonialsMarquee({
  items,
  direction = "ltr",
}: TestimonialsMarqueeProps) {
  const rootRef = useRef<HTMLDivElement>(null)
  const viewportRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const tweenRef = useRef<gsap.core.Tween | null>(null)
  const speedTweenRef = useRef<gsap.core.Tween | null>(null)
  const hoverPausedRef = useRef(false)
  const offscreenPausedRef = useRef(false)
  const userPausedRef = useRef(false)

  const [userPaused, setUserPaused] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)

  const syncTimeScale = useCallback(() => {
    const tween = tweenRef.current
    if (!tween) return

    const shouldRun =
      !userPausedRef.current &&
      !offscreenPausedRef.current &&
      !hoverPausedRef.current

    speedTweenRef.current?.kill()
    speedTweenRef.current = gsap.to(tween, {
      timeScale: shouldRun ? 1 : 0,
      duration: 0.6,
      ease: "power2.out",
    })
  }, [])

  useEffect(() => {
    userPausedRef.current = userPaused
    syncTimeScale()
  }, [userPaused, syncTimeScale])

  useGSAP(
    () => {
      const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
      setReducedMotion(preference.matches)
      if (preference.matches) return

      const track = trackRef.current
      const root = rootRef.current
      if (!track || !root) return

      const fromX = direction === "ltr" ? -50 : 0
      const toX = direction === "ltr" ? 0 : -50

      const tween = gsap.fromTo(
        track,
        { xPercent: fromX },
        {
          xPercent: toX,
          duration: 60,
          ease: "none",
          repeat: -1,
        }
      )
      tweenRef.current = tween

      const setDurationFromWidth = () => {
        const halfWidth = track.scrollWidth / 2
        if (halfWidth > 0) {
          tween.duration(Math.max(halfWidth / PIXELS_PER_SECOND, 20))
        }
      }

      setDurationFromWidth()

      const scrollTrigger = ScrollTrigger.create({
        trigger: root,
        start: "top bottom",
        end: "bottom top",
        onToggle: (self) => {
          offscreenPausedRef.current = !self.isActive
          syncTimeScale()
        },
      })

      const resizeObserver = new ResizeObserver(() => {
        setDurationFromWidth()
        ScrollTrigger.refresh()
      })
      resizeObserver.observe(track)

      return () => {
        resizeObserver.disconnect()
        scrollTrigger.kill()
        speedTweenRef.current?.kill()
        tween.kill()
        tweenRef.current = null
      }
    },
    { scope: rootRef, dependencies: [direction, syncTimeScale] }
  )

  function handlePointerEnter() {
    hoverPausedRef.current = true
    syncTimeScale()
  }

  function handlePointerLeave() {
    hoverPausedRef.current = false
    syncTimeScale()
  }

  function handleFocusIn() {
    hoverPausedRef.current = true
    syncTimeScale()
  }

  function handleFocusOut(event: React.FocusEvent<HTMLDivElement>) {
    const next = event.relatedTarget
    if (next instanceof Node && rootRef.current?.contains(next)) return
    hoverPausedRef.current = false
    syncTimeScale()
  }

  return (
    <div
      ref={rootRef}
      className="testimonials-marquee-root"
      onFocusCapture={reducedMotion ? undefined : handleFocusIn}
      onBlurCapture={reducedMotion ? undefined : handleFocusOut}
    >
      <button
        type="button"
        className="testimonials-marquee-control"
        aria-pressed={userPaused}
        onClick={() => setUserPaused((paused) => !paused)}
      >
        {userPaused ? (
          <>
            <Play size={16} weight="fill" aria-hidden="true" />
            Play carousel
          </>
        ) : (
          <>
            <Pause size={16} weight="fill" aria-hidden="true" />
            Pause carousel
          </>
        )}
      </button>

      <div
        ref={viewportRef}
        className={`testimonials-marquee-viewport${reducedMotion ? "testimonials-marquee-viewport--static" : ""}`}
        onMouseEnter={reducedMotion ? undefined : handlePointerEnter}
        onMouseLeave={reducedMotion ? undefined : handlePointerLeave}
      >
        <div
          ref={trackRef}
          className={`testimonials-marquee-track${reducedMotion ? "testimonials-marquee-track--static" : ""}`}
        >
          <div className="testimonials-marquee-set">
            {items.map((item) => (
              <MarqueeCard item={item} key={item.id} tabIndex={0} />
            ))}
          </div>
          {!reducedMotion ? (
            <div className="testimonials-marquee-set" aria-hidden="true" inert>
              {items.map((item) => (
                <MarqueeCard item={item} key={`dup-${item.id}`} />
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}
