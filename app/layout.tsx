import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import AuthProvider from "@/components/providers/AuthProvider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GARSB Destination Private Limited",
  description: "We Plan & Guide, you Settle",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
