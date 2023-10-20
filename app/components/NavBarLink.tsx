'use client'
import { useState } from 'react'

export const NavBarLink = ({ name, children }: { name: string, children: React.ReactNode }) => {
  const [mouseOn, setMouseOn] = useState(false)

  return (
    <li className='relative z-10 list-none' onMouseEnter={() => { setMouseOn(true) }} onMouseLeave={() => { setMouseOn(false) }}>
      {children}
      {mouseOn &&
        <>
          <span className='absolute w-2 h-2 rotate-45 bg-slate-600 top-1/2 left-[30px] -translate-y-1/2'></span>
          <span className='absolute bg-slate-600 text-xs top-1/2 left-8 -translate-y-1/2 px-2 py-1 text-white rounded-sm shadow-sm z-[9999] flex'><p className='flex-1 text-center whitespace-nowrap'>{name}</p></span>
        </>
      }
    </li>)
}
