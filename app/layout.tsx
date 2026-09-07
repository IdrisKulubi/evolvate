import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Evolvate Consulting — Strategy that moves businesses forward",
  description:
    "Business development, financial management, and project consulting. Find clarity, build confidence, and move forward with Evolvate.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>{children}</body>
    </html>
  )
}
