import type { Metadata } from 'next'
import { DM_Sans, DM_Serif_Display, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _dmSans = DM_Sans({ subsets: ["latin"] });
const _dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AI Product Builder - Personal Website',
  description: 'AI Product Manager, Growth Hacker & Agent Builder based in Shanghai.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-background text-foreground" suppressHydrationWarning>
        <div className="bg-noise" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
