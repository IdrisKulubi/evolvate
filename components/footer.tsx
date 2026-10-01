import Link from "next/link"
import Image from "next/image"
import { ArrowUp } from "@phosphor-icons/react/dist/ssr"

import { BrandLogo } from "@/components/brand-logo"
import { ConsultationTrigger } from "@/components/consultation-trigger"

const navigation = [
  { label: "Start", href: "/" },
  { label: "Who we work with", href: "/#decision-points" },
  { label: "Services", href: "/#services" },
  { label: "How we work", href: "/#how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact us", href: "/contact" },
] as const

const expertise = [
  "Business development",
  "Financial management",
  "Project management",
  "Project controls",
] as const

export function Footer() {
  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="footer-inner">
        <div className="footer-invitation">
          <div>
            <p>Have a consequential decision ahead?</p>
            <h2 id="footer-title">
              Let&apos;s make the next move
              <br />
              <em>clear.</em>
            </h2>
          </div>
          <ConsultationTrigger className="footer-cta">
            Start a conversation
          </ConsultationTrigger>
        </div>

        <div className="footer-watermark" aria-hidden="true">
          <Image
            src="/brand/evolvate-symbol-reversed.svg"
            alt=""
            width={168}
            height={140}
          />
        </div>

        <div className="footer-directory">
          <BrandLogo className="footer-brand-logo" variant="reversed" />

          <nav className="footer-links" aria-label="Footer navigation">
            <div>
              <p>Navigate</p>
              {navigation.map((item) => (
                <Link href={item.href} key={item.label}>
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <p>Expertise</p>
              {expertise.map((item) => (
                <Link href="/#services" key={item}>
                  {item}
                </Link>
              ))}
            </div>
            <div>
              <p>Based in</p>
              <span>Sweden</span>
              <span>Working globally</span>
            </div>
          </nav>
        </div>

        <div className="footer-baseline">
          <p>© {new Date().getFullYear()} Evolvate Consulting</p>
          <p>Clarity. Confidence. Progress.</p>
          <Link href="/" aria-label="Return to the homepage">
            Home <ArrowUp size={15} weight="bold" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
