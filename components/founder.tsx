import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, LinkedinLogo } from "@phosphor-icons/react/dist/ssr"

import { founder } from "@/lib/content/founder"

interface FounderSectionProps {
  variant?: "full" | "teaser"
}

export function FounderSection({ variant = "full" }: FounderSectionProps) {
  if (variant === "teaser") {
    return (
      <section
        className="founder-teaser"
        aria-labelledby="founder-teaser-title"
      >
        <div className="founder-teaser-copy">
          <p>Leadership</p>
          <h2 id="founder-teaser-title">
            Experience across programmes, sectors, and scale.
          </h2>
          <p>
            {founder.name} leads Evolvate with a background in project controls,
            financial management, and delivery—including work on mega projects in
            Sweden and experience in aerospace and construction.
          </p>
          <Link className="founder-teaser-link" href="/about">
            Meet the founder
            <ArrowUpRight size={18} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </section>
    )
  }

  return (
    <section className="founder" aria-labelledby="founder-title">
      <header className="founder-header">
        <p>Meet the founder</p>
        <h2 id="founder-title">{founder.name}</h2>
        <p className="founder-role">{founder.role}</p>
      </header>

      <div className="founder-layout">
        <figure className="founder-portrait">
          <Image
            src={founder.photoSrc}
            alt={founder.photoAlt}
            width={640}
            height={800}
            className="founder-photo"
          />
          <figcaption className="founder-photo-note">
            {/* TODO: replace with real data */} Placeholder portrait
          </figcaption>
        </figure>

        <div className="founder-story">
          {founder.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}

          <h3>Selected experience</h3>
          <ol className="founder-highlights">
            {founder.highlights.map((item) => (
              <li key={item.period}>
                <span>{item.period}</span>
                <p>{item.detail}</p>
              </li>
            ))}
          </ol>

          <h3>Areas of expertise</h3>
          <ul className="founder-expertise">
            {founder.expertise.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>

          <a
            className="founder-linkedin"
            href={founder.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinLogo size={20} weight="fill" aria-hidden="true" />
            View LinkedIn profile
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
