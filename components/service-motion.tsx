"use client"

import { useEffect, useRef, type ReactNode } from "react"

type ServiceMotionProps = {
  children: ReactNode
  className?: string
  id?: string
}

export function ServiceMotion({ children, className, id }: ServiceMotionProps) {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const section = sectionRef.current

    if (
      !section ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return
    }

    const rows = Array.from(
      section.querySelectorAll<HTMLElement>("[data-service-row]")
    )

    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue

          const row = entry.target as HTMLElement
          const parts = Array.from(
            row.querySelectorAll<HTMLElement>("[data-service-part]")
          )
          const rule = row.querySelector<HTMLElement>("[data-service-rule]")

          rule?.animate(
            [
              { transform: "scaleX(0)", transformOrigin: "left" },
              { transform: "scaleX(1)", transformOrigin: "left" },
            ],
            {
              duration: 700,
              easing: "cubic-bezier(0.22, 1, 0.36, 1)",
              fill: "forwards",
            }
          )

          parts.forEach((part, index) => {
            part.animate(
              [
                { transform: "translateY(10px)" },
                { transform: "translateY(0)" },
              ],
              {
                duration: 480,
                delay: 50 + index * 45,
                easing: "cubic-bezier(0.22, 1, 0.36, 1)",
                fill: "forwards",
              }
            )
          })

          activeObserver.unobserve(row)
        }
      },
      { threshold: 0.22 }
    )

    rows.forEach((row) => observer.observe(row))

    return () => observer.disconnect()
  }, [])

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
