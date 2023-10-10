import Link from 'next/link'
import React from 'react'
import { AddItemIconSVG } from './AddItemIcon'

export const AddItemButton = () => {
  return (
    <div className='bg-dark-accent rounded-xl p-4 grid grid-cols-[85px_1fr] gap-6 items-center justify-center'>
      <AddItemIconSVG />
      <span className='flex flex-col gap-2'>
        <p className='text-white font-bold'>Didn't find what you need?</p>
        <Link href='/?addItem=true' className='px-1 py-2 bg-white text-sm font-bold rounded-md flex items-center justify-center w-24'>Add item</Link>
      </span>
    </div>
  )
}
