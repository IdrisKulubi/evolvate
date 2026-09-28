export interface Testimonial {
  id: string
  quote: string
  name: string
  role: string
  context: string
  service: string
  /** Demo entries must not be shown in production unless explicitly enabled. */
  isDemo: boolean
}

export const testimonials: Testimonial[] = [
  {
    id: "demo-1",
    quote:
      "Evolvate helped our leadership team see cost and progress in one place. The reporting rhythm they supported made programme decisions easier to discuss.",
    name: "Demo Client A",
    role: "Programme Director",
    context: "Infrastructure programme, Sweden",
    service: "Project controls",
    isDemo: true,
  },
  {
    id: "demo-2",
    quote:
      "We needed a clearer view of cash and forecast assumptions before a growth step. The work was structured, practical, and respectful of how we already operate.",
    name: "Demo Client B",
    role: "Managing Director",
    context: "Growing SME, Nordics",
    service: "Financial management",
    isDemo: true,
  },
  {
    id: "demo-3",
    quote:
      "They stayed close to the delivery team—not just the slide deck—and helped us name owners and review cadence for a cross-functional initiative.",
    name: "Demo Client C",
    role: "Operations Lead",
    context: "Established organization",
    service: "Project management",
    isDemo: true,
  },
  {
    id: "demo-4",
    quote:
      "Market research was grounded in what we could actually act on. We left with a sharper view of segments and a plan we could test without overcommitting.",
    name: "Demo Client D",
    role: "Commercial Director",
    context: "Industrial business, Sweden",
    service: "Business development",
    isDemo: true,
  },
  {
    id: "demo-5",
    quote:
      "Financial and project reporting finally spoke the same language. That made steering committee conversations shorter and more focused on choices.",
    name: "Demo Client E",
    role: "Project Controls Lead",
    context: "Mega project, Sweden",
    service: "Project controls",
    isDemo: true,
  },
  {
    id: "demo-6",
    quote:
      "Advisory support was direct and collaborative. They helped us stress-test assumptions before we presented options to the board.",
    name: "Demo Client F",
    role: "CFO",
    context: "International organization",
    service: "Advisory",
    isDemo: true,
  },
]

export function shouldShowTestimonials(): boolean {
  if (process.env.NEXT_PUBLIC_SHOW_TESTIMONIALS === "true") return true
  return process.env.NODE_ENV !== "production"
}

export function getVisibleTestimonials(): Testimonial[] {
  if (!shouldShowTestimonials()) return []
  return testimonials
}
