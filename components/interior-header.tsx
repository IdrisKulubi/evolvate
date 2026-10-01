import Link from "next/link"

import { BrandLogo } from "@/components/brand-logo"
import { ConsultationTrigger } from "@/components/consultation-trigger"

type InteriorHeaderProps = {
  current?: "about" | "contact"
}

export function InteriorHeader({ current }: InteriorHeaderProps) {
  return (
    <header className="interior-header">
      <BrandLogo />

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

      <ConsultationTrigger className="header-cta">
        Let&apos;s talk
      </ConsultationTrigger>
    </header>
  )
}
