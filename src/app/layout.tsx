import './globals.css'
import Link from 'next/link'
import { ReactNode } from 'react'

export const metadata = {
  title: 'My Nursing Journey - Professional Portfolio',
  description: 'A digital portfolio showcasing my future career as a nurse and advocacy for healthcare',
}

interface RootLayoutProps {
  children: ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <nav>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/ict-in-nursing">ICT in Nursing</Link></li>
            <li><Link href="/advocacy">Advocacy</Link></li>
            <li><Link href="/social-media">Social Media</Link></li>
            <li><Link href="/digital-citizenship">Digital Citizenship</Link></li>
            <li><Link href="/global-comparison">PH vs First World</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        
        <main>{children}</main>
        
        <footer>
          <p>&copy; 2026 My Nursing Journey. Created for ICT Performance Activity.</p>
          <p>This website is part of an educational project demonstrating digital citizenship and ICT advocacy.</p>
        </footer>
      </body>
    </html>
  )
}