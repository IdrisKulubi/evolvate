import { siteConfig, absoluteUrl } from "@/lib/site"

type SchemaObject = Record<string, unknown>

export function organizationGraph(): SchemaObject[] {
  const orgId = `${siteConfig.siteUrl}/#organization`
  const serviceId = `${siteConfig.siteUrl}/#professional-service`

  return [
    {
      "@type": "Organization",
      "@id": orgId,
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      logo: absoluteUrl(siteConfig.logoPath),
      email: siteConfig.contactEmail,
    },
    {
      "@type": "ProfessionalService",
      "@id": serviceId,
      name: siteConfig.siteName,
      url: siteConfig.siteUrl,
      image: absoluteUrl(siteConfig.ogImagePath),
      email: siteConfig.contactEmail,
      areaServed: siteConfig.areaServed.map((name) => ({
        "@type": "Place",
        name,
      })),
      parentOrganization: { "@id": orgId },
    },
  ]
}

export function webPageSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}): SchemaObject {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    isPartOf: { "@id": `${siteConfig.siteUrl}/#organization` },
    inLanguage: siteConfig.locale,
  }
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
): SchemaObject {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function graphDocument(...nodes: SchemaObject[]): SchemaObject {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  }
}
