import { getVisibleTestimonials } from "@/lib/content/testimonials"

import { TestimonialsMarquee } from "@/components/testimonials-marquee"

export function Testimonials() {
  const items = getVisibleTestimonials()

  if (items.length === 0) return null

  return (
    <section
      className="testimonials"
      id="testimonials"
      aria-labelledby="testimonials-title"
    >
      <header className="testimonials-intro">
        <p>Client perspectives</p>
        <h2 id="testimonials-title">What partners say about working with us</h2>
        <p className="testimonials-demo-note" role="note">
          Demo content for layout review—replace with approved testimonials
          before launch.
        </p>
      </header>

      <TestimonialsMarquee items={items} direction="ltr" />
    </section>
  )
}
