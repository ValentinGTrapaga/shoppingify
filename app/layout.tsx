import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { NavBar } from './components/NavBar'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shoppingify',
  description: 'Dev challenge to gain knowledge on Supabase and NextJS 13'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body className={`${quicksand.className} min-h-screen min-w-screen`}>
        <NavBar />
        <main className='w-full pl-[48px] md:pl-[72px] min-h-screen'>
          {children}
        </main>
      </body>
    </html>
  )
}
