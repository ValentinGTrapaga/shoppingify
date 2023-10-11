import './globals.css'
import type { Metadata } from 'next'
import { Quicksand } from 'next/font/google'
import { NavBar } from './components/NavBar'
import { type Category, type Database } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { LoginPage } from './components/LoginPage'
import { AsideSection } from './components/AsideSection'

const quicksand = Quicksand({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shoppingify',
  description: 'Dev challenge to gain knowledge on Supabase and NextJS 13'
}

export default async function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    return (
      <html lang='en'>
        <body className={`${quicksand.className} min-h-screen min-w-screen`}>
          <LoginPage />
        </body>
      </html>
    )
  }

  const { data: categories } = await supabase.from('categories').select('*').eq('user_id', user?.id)

  return (
    <html lang='en'>
      <body className={`${quicksand.className} min-h-screen min-w-screen`}>
        <NavBar />
        <main className='w-full pl-[48px] md:pl-[60px] min-h-screen'>
          {children}
          <AsideSection categories={categories} />
        </main>
      </body>
    </html>
  )
}
