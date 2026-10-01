const PRODUCTION_SITE_URL = "https://www.evolvateconsulting.com"

function normalizeSiteUrl(url: string) {
  return url.replace(/\/$/, "")
}

export const siteConfig = {
  siteUrl: normalizeSiteUrl(
    process.env.NEXT_PUBLIC_SITE_URL ?? PRODUCTION_SITE_URL
  ),
  siteName: "Evolvate Consulting",
  defaultTitle: "Evolvate Consulting — Business, finance, and project support",
  titleTemplate: "%s | Evolvate Consulting",
  defaultDescription:
    "Strategic business development, financial management, project management, and project controls for founders and organizations in Sweden and internationally.",
  homeDescription:
    "Cost, schedule, and cash in one view. Evolvate supports business development, financial management, project management, and project controls in Sweden and internationally.",
  locale: "en",
  contactEmail: "info@evolvateconsulting.com",
  areaServed: ["Sweden", "International"] as const,
  /** Open Graph default (1200×630 source; replace with /og/default.png when available). */
  ogImagePath: "/hero/hero-poster.webp",
  ogImageWidth: 1200,
  ogImageHeight: 630,
  logoPath: "/brand/evolvate-logo.svg",
} as const

export function absoluteUrl(path: string) {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  const normalized = path.startsWith("/") ? path : `/${path}`
  return `${siteConfig.siteUrl}${normalized}`
}
