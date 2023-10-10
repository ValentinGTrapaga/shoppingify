import Link from 'next/link'
import React from 'react'
import { ChartSVG, ClockSVG, ListSVG } from './icons'
import { ShoppingCartButton } from './ShoppingCartButton'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { LogOutButton } from './LogOutButton'

export const NavBar = async () => {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <nav className='w-[48px] md:w-[72px] fixed h-screen top-0 left-0 px-1 py-4 flex flex-col items-center justify-between gap-6 bg-white shadow-sm'>
      <Link href='/' className='text-lg font-bold'>Sfy</Link>
      <ul className='w-6 flex flex-col gap-8'>
        <li className='hover:drop-shadow-itemBox'>
          <Link href='#'>
            <ListSVG />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <ClockSVG />
          </Link>
        </li>
        <li>
          <Link href='#'>
            <ChartSVG />
          </Link>
        </li>
        {session
          ? (<>
            <li>
              <img src={session.user.user_metadata.avatar_url} className='rounded-full object-cover' />
            </li>
            <li>
              <LogOutButton />
            </li>
          </>)
          : (null)
        }
      </ul>
      <ShoppingCartButton />
    </nav>
  )
}
