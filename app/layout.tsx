import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { ConsultationDialog } from "@/components/consultation-dialog"
import "./globals.css"
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Evolvate Consulting — Business, finance, and project support",
  description:
    "Strategic business development, financial management, and project delivery for organizations in Sweden and internationally.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        {children}
        <ConsultationDialog />
      </body>
    </html>
  )
}
