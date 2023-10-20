import Link from 'next/link'
import React from 'react'
import { ChartSVG, ClockSVG, ListSVG } from './icons'
import { ItemsListButton } from './ItemsListButton'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { LogOutButton } from './LogOutButton'
import { ShoppingifyIconSVG } from './ShoppingifyIcon'
import { NavBarLink } from './NavBarLink'

export async function NavBar() {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <nav className='w-[48px] md:w-[60px] fixed h-screen top-0 left-0 px-1 py-4 flex flex-col items-center justify-between gap-6 bg-white shadow-sm z-[9999]'>
      <NavBarLink name='Shoppingify'>
        <Link href='/' className='text-lg font-bold'><ShoppingifyIconSVG cls='w-8 h-8 -rotate-45' /></Link>
      </NavBarLink>
      <ul className='w-6 flex flex-col gap-8'>
        <NavBarLink name='Lists'>
          <Link href='/lists'>
            <ListSVG />
          </Link>
        </NavBarLink>
        <NavBarLink name='History'>
          <Link href='/history'>
            <ClockSVG />
          </Link>
        </NavBarLink>
        <NavBarLink name='Charts'>
          <Link href='/charts'>
            <ChartSVG />
          </Link>
        </NavBarLink>
        {session
          ? (<>
            <li>
              <img src={session.user.user_metadata.avatar_url} className='rounded-full object-cover' />
            </li>
            <NavBarLink name='Log out'>
              <LogOutButton />
            </NavBarLink>
          </>)
          : (null)
        }
      </ul>
      <NavBarLink name='Shopping cart'>
        <ItemsListButton />
      </NavBarLink>
    </nav>
  )
}
