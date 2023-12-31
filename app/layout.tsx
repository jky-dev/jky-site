import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import './globals.css'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  style: ['normal'],
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  title: 'Hello :)',
  description: 'Welcome to my site',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={josefinSans.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
