import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Gold Lab - Premium Jewelry & Luxury Services",
  description:
    "Discover exquisite jewelry and luxury services at The Gold Lab. Expert craftsmanship, premium materials, and personalized appointments. Book your consultation today.",
  keywords: ["jewelry", "luxury", "gold", "engagement rings", "custom design", "jewelry repair"],
  authors: [{ name: "The Gold Lab" }],
  creator: "The Gold Lab",
  publisher: "The Gold Lab",
  formatDetection: {
    email: false,
    telephone: false,
    address: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://thegoldlab.com",
    siteName: "The Gold Lab",
    title: "The Gold Lab - Premium Jewelry & Luxury Services",
    description: "Discover exquisite jewelry and luxury services at The Gold Lab.",
    images: [
      {
        url: "/luxury-gold-jewelry-display.jpg",
        width: 1200,
        height: 630,
        alt: "The Gold Lab - Premium Jewelry",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Gold Lab - Premium Jewelry & Luxury Services",
    description: "Discover exquisite jewelry and luxury services at The Gold Lab.",
    images: ["/luxury-gold-jewelry-display.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://thegoldlab.com" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
