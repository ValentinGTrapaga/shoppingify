'use client'

import React from 'react'
import { ListItemsSVG } from './icons'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export const ShoppingCartButton = () => {
  const searchParams = useSearchParams()
  const newList = searchParams.get('newList')
  const linkHRef = newList ? '/' : '/?newList=true'
  return (
    <Link href={linkHRef} className='rounded-full bg-primary-accent w-8 h-8 md:w-10 md:h-10 flex items-center justify-center'>
      <ListItemsSVG cln='w-6  h-6' />
    </Link>
  )
}
