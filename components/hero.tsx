"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, Pause, Play, X } from "@phosphor-icons/react"

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const [playing, setPlaying] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)")
    const updatePlayback = () => {
      if (preference.matches) video.pause()
      else
        void video.play().catch(() => {
          /* Keep the poster when autoplay is unavailable. */
        })
    }
    updatePlayback()
    preference.addEventListener("change", updatePlayback)
    return () => preference.removeEventListener("change", updatePlayback)
  }, [])

  function togglePlayback() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) void video.play().catch(() => {})
    else video.pause()
  }

  return (
    <main className="site-canvas" id="main-content">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-landscape" aria-hidden="true">
          <video
            ref={videoRef}
            className="hero-video"
            poster="/hero/hero-poster.webp"
            muted
            loop
            playsInline
            preload="metadata"
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            tabIndex={-1}
          >
            <source src="/hero/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <header className="hero-header">
          <Link
            className="wordmark"
            href="/"
            aria-label="Evolvate Consulting home"
          >
            <span>
              evolvate<span className="wordmark-period">.</span>
            </span>
            <span className="wordmark-descriptor">Consulting</span>
          </Link>
          <p className="header-positioning">Clarity. Confidence. Progress.</p>
          <button
            className="header-cta"
            onClick={() => dialogRef.current?.showModal()}
          >
            Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
          </button>
        </header>
        <div className="hero-content">
          <p className="hero-eyebrow">
            Business <span aria-hidden="true">·</span> Finance{" "}
            <span aria-hidden="true">·</span> Projects
          </p>
          <h1 id="hero-title">
            Strategy that moves
            <br className="hero-line-break" /> businesses forward.
          </h1>
          <p className="hero-description">
            Turn ambition into a clear way forward. We bring strategy, financial
            clarity, and hands-on support to your next chapter.
          </p>
          <button
            className="consultation-button"
            onClick={() => dialogRef.current?.showModal()}
          >
            Book a consultation <ArrowUpRight size={20} aria-hidden="true" />
          </button>
          <p className="hero-audience">
            For founders, growing teams, and established businesses.
          </p>
        </div>
        <div className="hero-baseline">
          <p>
            Based in Sweden.
            <br />
            <span>Focused on your next step.</span>
          </p>
          <button
            className="motion-button"
            onClick={togglePlayback}
            aria-label={
              playing ? "Pause background video" : "Play background video"
            }
          >
            {playing ? (
              <Pause size={15} weight="fill" aria-hidden="true" />
            ) : (
              <Play size={15} weight="fill" aria-hidden="true" />
            )}
            <span>{playing ? "Pause scenery" : "Play scenery"}</span>
          </button>
        </div>
      </section>
      <dialog
        ref={dialogRef}
        className="consultation-dialog"
        aria-labelledby="consultation-title"
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current?.close()
        }}
      >
        <div className="consultation-dialog-content">
          <button
            className="dialog-close"
            aria-label="Close consultation details"
            onClick={() => dialogRef.current?.close()}
          >
            <X size={22} />
          </button>
          <p className="dialog-label">Evolvate Consulting</p>
          <h2 id="consultation-title">
            Every next chapter
            <br />
            starts with a conversation.
          </h2>
          <p>
            Our consultation booking is coming soon. We look forward to
            discussing your business, your challenges, and where you want to go
            next.
          </p>
          <button
            className="consultation-button"
            onClick={() => dialogRef.current?.close()}
          >
            Back to Evolvate <ArrowUpRight size={20} aria-hidden="true" />
          </button>
        </div>
      </dialog>
    </main>
  )
}
