import type { Metadata } from "next"
import { Inter, Source_Serif_4 } from "next/font/google"
import { Providers } from "./components/providers"
import { cn } from "@/utils"

import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  display: "swap",
})

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
})

export const metadata: Metadata = {
  title: "samewaves | different minds. same wave.",
  description: "A community empowering neurodivergent youth through authentic connection. samewaves turns neurodivergent youth into connected communities.",
  icons: [
    { rel: "icon", url: "/favicon.png", type: "image/png" },
    { rel: "apple-touch-icon", url: "/favicon.png" },
  ],
  openGraph: {
    title: "samewaves",
    description: "different minds. same wave.",
    siteName: "samewaves",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn(inter.variable, sourceSerif.variable)}>
      <body className="font-sans bg-[#F5F1EB] text-[#1a1a1a] antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
