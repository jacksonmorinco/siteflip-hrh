import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Hampton Roads Helicopters',
    default: 'Hampton Roads Helicopters — A Full Service Aviation Company',
  },
  description: 'Hampton Roads Helicopters (HRH) is a full-service aviation company based at Hampton Roads Executive Airport. Helicopter charter, aerial tours, flight training, and Robinson-authorized maintenance.',
  keywords: ['helicopter charter', 'Hampton Roads', 'Virginia', 'helicopter tours', 'flight training', 'Robinson helicopter'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
