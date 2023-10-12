import { type ItemWithCategory } from '@/database.types'
import React from 'react'
import { AddItemToShListButton } from './AddItemToShListButton'

export const Item = ({ item }: { item: ItemWithCategory }) => {
  return (
    <li
      className='rounded-xl bg-white p-4 flex w-48 drop-shadow-itemBox items-center shadow-black justify-between border-2 border-zinc-100'
      key={item.id}>
      <p className='font-semibold truncate text-sm'>{item.name}</p>
      <AddItemToShListButton item={item} />
    </li>
  )
}
