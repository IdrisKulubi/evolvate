import Image from "next/image"
import Link from "next/link"

import { BrandLogo } from "@/components/brand-logo"
import { ConsultationTrigger } from "@/components/consultation-trigger"

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-landscape" aria-hidden="true">
          <Image
            className="hero-image"
            src="/hero/hero-poster.webp"
            alt=""
            fill
            priority
            sizes="100vw"
          />
        </div>
        <header className="hero-header">
          <BrandLogo />
          <nav className="header-navigation" aria-label="Primary navigation">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact us</Link>
          </nav>
          <ConsultationTrigger className="header-cta">
            Let’s talk
          </ConsultationTrigger>
        </header>
        <div className="hero-content">
          <p className="hero-eyebrow">
            Business <span aria-hidden="true">·</span> Finance{" "}
            <span aria-hidden="true">·</span> Projects{" "}
            <span aria-hidden="true">·</span> Controls
          </p>
          <h1 id="hero-title">
            Cost, schedule, and cash
            <br className="hero-line-break" /> in one view.
          </h1>
          <p className="hero-description">
            We support founders, growing businesses, and established
            organizations in Sweden and internationally with business
            development, financial management, project management, and project
            controls.
          </p>
          <ConsultationTrigger className="consultation-button">
            Start a conversation
          </ConsultationTrigger>
          <p className="hero-audience">
            For founders, growing teams, and established organizations.
          </p>
        </div>
        <div className="hero-baseline">
          <p>
            Based in Sweden.
            <br />
            <span>Working with clients locally and internationally.</span>
          </p>
        </div>
      </section>
    </>
  )
}
