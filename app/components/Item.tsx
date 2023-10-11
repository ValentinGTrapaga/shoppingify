import { type ItemWithCategory } from '@/database.types'
import React from 'react'
import { AddItemToShListButton } from './AddItemToShListButton'

export const Item = ({ item }: { item: ItemWithCategory }) => {
  return (
    <li
      className='rounded-xl bg-white p-4 flex w-48 drop-shadow-itemBox shadow-black justify-between border-2 border-zinc-100'
      key={item.id}>
      <span className='flex flex-col'>
        <p className='font-semibold '>{item.name}</p>
      </span>
      <AddItemToShListButton item={item} />
    </li>
  )
}
