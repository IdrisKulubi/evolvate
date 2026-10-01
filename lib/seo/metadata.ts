import type { Metadata } from "next"

import { siteConfig } from "@/lib/site"

const googleVerification = process.env.GOOGLE_SITE_VERIFICATION

function socialImages(imagePath: string, alt: string) {
  return [
    {
      url: imagePath,
      width: siteConfig.ogImageWidth,
      height: siteConfig.ogImageHeight,
      alt,
    },
  ]
}

export function createRootMetadata(): Metadata {
  const title = siteConfig.defaultTitle
  const description = siteConfig.defaultDescription

  return {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
      default: title,
      template: siteConfig.titleTemplate,
    },
    description,
    applicationName: siteConfig.siteName,
    authors: [{ name: siteConfig.siteName, url: siteConfig.siteUrl }],
    creator: siteConfig.siteName,
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.siteName,
      title,
      description,
      url: "/",
      images: socialImages(siteConfig.ogImagePath, siteConfig.siteName),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImagePath],
    },
    icons: {
      icon: [{ url: siteConfig.logoPath, type: "image/svg+xml" }],
      apple: [{ url: siteConfig.logoPath, type: "image/svg+xml" }],
    },
    ...(googleVerification
      ? { verification: { google: googleVerification } }
      : {}),
  }
}

interface PageMetadataInput {
  title: string
  description: string
  path: `/${string}` | "/"
  ogImage?: string
  noIndex?: boolean
}

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage = siteConfig.ogImagePath,
  noIndex = false,
}: PageMetadataInput): Metadata {
  const metadata: Metadata = {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url: path,
      images: socialImages(ogImage, title),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  }

  if (noIndex) {
    metadata.robots = { index: false, follow: true }
  }

  return metadata
}

export function buildHomeMetadata(): Metadata {
  const title = siteConfig.defaultTitle
  const description = siteConfig.homeDescription

  return {
    ...buildPageMetadata({
      title: "Home",
      description,
      path: "/",
    }),
    title: {
      absolute: title,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      siteName: siteConfig.siteName,
      title,
      description,
      url: "/",
      images: socialImages(siteConfig.ogImagePath, siteConfig.siteName),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.ogImagePath],
    },
  }
}
