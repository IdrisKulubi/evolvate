import Link from "next/link"
import { ArrowUpRight, EnvelopeSimple } from "@phosphor-icons/react/dist/ssr"

import { Footer } from "@/components/footer"
import { InteriorHeader } from "@/components/interior-header"
import { JsonLd } from "@/components/seo/json-ld"
import { buildPageMetadata } from "@/lib/seo/metadata"
import {
  breadcrumbSchema,
  graphDocument,
  webPageSchema,
} from "@/lib/seo/schema"

const contactPageDescription =
  "Contact Evolvate Consulting to discuss your next business, financial, or project decision. Based in Sweden, working with clients internationally."

export const metadata = buildPageMetadata({
  title: "Contact",
  description: contactPageDescription,
  path: "/contact",
})

export default function ContactPage() {
  const pageSchema = graphDocument(
    webPageSchema({
      name: "Contact Evolvate Consulting",
      description: contactPageDescription,
      path: "/contact",
    }),
    breadcrumbSchema([
      { name: "Home", path: "/" },
      { name: "Contact", path: "/contact" },
    ])
  )

  return (
    <main className="interior-page" id="main-content">
      <JsonLd data={pageSchema} />
      <InteriorHeader current="contact" />

      <section className="contact-hero" aria-labelledby="contact-title">
        <div className="contact-heading">
          <p>Contact us</p>
          <h1 id="contact-title">
            Bring us the decision you need to <em>make.</em>
          </h1>
        </div>

        <div className="contact-details">
          <p>
            Tell us what is changing, what feels stuck, or what needs to happen
            next. A short note is enough to begin.
          </p>
          <Link className="contact-email" href="mailto:info@evolvateconsulting.com">
            <EnvelopeSimple size={22} aria-hidden="true" />
            <span>
              New enquiries
              <strong>info@evolvateconsulting.com</strong>
            </span>
            <ArrowUpRight size={20} weight="bold" aria-hidden="true" />
          </Link>
          <p className="contact-response">
            Based in Sweden · Working with businesses globally
          </p>
        </div>
      </section>

      <section
        className="contact-prompt"
        aria-labelledby="contact-prompt-title"
      >
        <h2 id="contact-prompt-title">What helps us start well</h2>
        <div>
          <p>
            <span>Your context</span>
            What is happening in the business now?
          </p>
          <p>
            <span>The decision</span>
            What needs to become clearer?
          </p>
          <p>
            <span>The timing</span>
            When does movement need to begin?
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
