import Link from "next/link"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

type InteriorHeaderProps = {
  current?: "about" | "contact"
}

export function InteriorHeader({ current }: InteriorHeaderProps) {
  return (
    <header className="interior-header">
      <Link className="wordmark" href="/" aria-label="Evolvate Consulting home">
        <span>
          evolvate<span className="wordmark-period">.</span>
        </span>
        <span className="wordmark-descriptor">Consulting</span>
      </Link>

      <nav className="header-navigation" aria-label="Primary navigation">
        <Link
          href="/about"
          aria-current={current === "about" ? "page" : undefined}
        >
          About
        </Link>
        <Link
          href="/contact"
          aria-current={current === "contact" ? "page" : undefined}
        >
          Contact us
        </Link>
      </nav>

      <Link className="header-cta" href="/contact">
        Let&apos;s talk <ArrowUpRight size={17} aria-hidden="true" />
      </Link>
    </header>
  )
}
