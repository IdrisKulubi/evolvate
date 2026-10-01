import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Page not found",
  description:
    "The page you requested could not be found on Evolvate Consulting.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function NotFound() {
  return (
    <main className="interior-page" id="main-content">
      <section className="about-hero" aria-labelledby="not-found-title">
        <p>404</p>
        <h1 id="not-found-title">This page is not here.</h1>
        <div className="about-hero-copy">
          <p>
            The link may be outdated or mistyped. Return to the homepage or
            contact us if you need help finding something.
          </p>
          <p>
            <Link href="/">Back to home</Link>
            {" · "}
            <Link href="/contact">Contact us</Link>
          </p>
        </div>
      </section>
    </main>
  )
}
