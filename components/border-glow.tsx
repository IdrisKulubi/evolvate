"use client"

import {
  useCallback,
  useRef,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react"

import styles from "./border-glow.module.css"

type GlowStyle = CSSProperties & Record<`--${string}`, string | number>

type BorderGlowProps = {
  children: ReactNode
  className?: string
  edgeSensitivity?: number
  backgroundColor?: string
  borderRadius?: number
  glowRadius?: number
  glowIntensity?: number
  animated?: boolean
  colors?: readonly [string, string, string]
}

export function BorderGlow({
  children,
  className = "",
  edgeSensitivity = 24,
  backgroundColor = "#243c34",
  borderRadius = 14,
  glowRadius = 28,
  glowIntensity = 0.7,
  animated = false,
  colors = ["#74a787", "#bed9c6", "#8aafb3"],
}: BorderGlowProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const handlePointerMove = useCallback(
    (event: PointerEvent<HTMLDivElement>) => {
      const card = cardRef.current
      if (!card) return

      const rect = card.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      const edgeDistance = Math.min(x, y, rect.width - x, rect.height - y)
      const threshold =
        Math.min(rect.width, rect.height) * (edgeSensitivity / 100)
      const proximity = Math.max(0, Math.min(1, 1 - edgeDistance / threshold))
      const angle =
        Math.atan2(y - rect.height / 2, x - rect.width / 2) * (180 / Math.PI) +
        90

      card.style.setProperty("--edge-proximity", proximity.toFixed(3))
      card.style.setProperty("--cursor-angle", `${angle.toFixed(2)}deg`)
    },
    [edgeSensitivity]
  )

  const glowStyle: GlowStyle = {
    "--card-bg": backgroundColor,
    "--card-radius": `${borderRadius}px`,
    "--glow-radius": `${glowRadius}px`,
    "--glow-intensity": glowIntensity,
    "--glow-one": colors[0],
    "--glow-two": colors[1],
    "--glow-three": colors[2],
  }

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${animated ? styles.animated : ""} ${className}`}
      style={glowStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={() =>
        cardRef.current?.style.setProperty("--edge-proximity", "0")
      }
    >
      <span className={styles.edgeLight} aria-hidden="true" />
      <div className={styles.inner}>{children}</div>
    </div>
  )
}
