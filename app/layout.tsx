import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ConsultationDialog } from "@/components/consultation-dialog"
import { SiteOrganizationJsonLd } from "@/components/seo/site-organization-json-ld"
import { createRootMetadata } from "@/lib/seo/metadata"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = createRootMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <SiteOrganizationJsonLd />
        {children}
        <ConsultationDialog />
      </body>
    </html>
  )
}
