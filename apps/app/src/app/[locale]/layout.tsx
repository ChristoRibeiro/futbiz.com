import "@futbiz/ui/globals.css"
import { I18nProviderClient } from "@/locales/client"
import { cn } from "@futbiz/ui/cn"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { ThemeProvider } from "next-themes"
import type React from "react"

export const metadata: Metadata = {
  title: {
    template: "Futbiz ― %s",
    default: "Futbiz",
  },
}

export const viewport = {
  themeColor: [{ media: "(prefers-color-scheme: light)" }, { media: "(prefers-color-scheme: dark)" }],
}

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(`${GeistSans.variable} ${GeistMono.variable}`, "antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <I18nProviderClient locale={locale}>{children}</I18nProviderClient>
        </ThemeProvider>
      </body>
    </html>
  )
}
