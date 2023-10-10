import { type ItemWithCategory } from '@/database.types'
import React from 'react'
import { PlusSVG } from './icons'

export const Item = ({ item }: { item: ItemWithCategory }) => {
  return (
    <li
      className='rounded-xl bg-white p-4 flex w-48 drop-shadow-itemBox shadow-black justify-between'
      key={item.id}>
      <span className='flex flex-col'>
        <p className='font-semibold '>{item.name}</p>
      </span>
      <button className='w-6 h-6'>
        <PlusSVG cln='opacity-50' />
      </button>
    </li>
  )
}