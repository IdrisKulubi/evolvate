import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

import { ConsultationTrigger } from "@/components/consultation-trigger"

export function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-landscape" aria-hidden="true">
          <Image
            className="hero-image"
            src="/hero/hero-image.png"
            alt=""
            fill
            priority
            sizes="100vw"
          />
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
          <nav className="header-navigation" aria-label="Primary navigation">
            <Link href="/about">About</Link>
            <Link href="/contact">Contact us</Link>
          </nav>
          <ConsultationTrigger className="header-cta">
            Let’s talk <ArrowUpRight size={17} aria-hidden="true" />
          </ConsultationTrigger>
        </header>
        <div className="hero-content">
          <p className="hero-eyebrow">
            Business <span aria-hidden="true">·</span> Finance{" "}
            <span aria-hidden="true">·</span> Projects
          </p>
          <h1 id="hero-title">
            Support for the strategic priorities
            <br className="hero-line-break" /> your business is facing.
          </h1>
          <p className="hero-description">
            We work with leaders in Sweden and internationally on business
            development, financial management, and project delivery—combining
            structured analysis with practical experience.
          </p>
          <ConsultationTrigger className="consultation-button">
            Start a conversation <ArrowUpRight size={20} aria-hidden="true" />
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
