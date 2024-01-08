import type { Metadata } from 'next'
import { Exo_2 } from 'next/font/google'
import './globals.css'
import Navbar from './ui/navbar'

const exo = Exo_2({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ivy Wong\'s Website',
  description: 'Ivy Wong\'s Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <Navbar />
        {children}
      s</body>
    </html>
  )
}
