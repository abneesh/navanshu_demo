import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Elite Legal Associates - Premier Law Firm',
  description: 'Professional legal services with over 25 years of experience. Specializing in corporate law, litigation, family law, and criminal defense.',
  keywords: 'lawyer, attorney, legal services, law firm, litigation, corporate law, family law, criminal defense',
  authors: [{ name: 'Elite Legal Associates' }],
  openGraph: {
    title: 'Elite Legal Associates - Premier Law Firm',
    description: 'Professional legal services with over 25 years of experience.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
