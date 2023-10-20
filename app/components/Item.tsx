'use client'
import { type ItemWithCategory } from '@/database.types'
import React from 'react'
import { AddItemToShListButton } from './AddItemToShListButton'
import { type StoreItem } from '../store'
import { useParams } from 'next/navigation'
import { DeleteItemButton } from './DeleteItemButton'

export const Item = ({ item }: { item: ItemWithCategory | StoreItem }) => {
  const params = useParams()
  return (
    <li
      className='rounded-lg bg-white grid grid-cols-[auto,1fr,auto] w-48 items-center drop-shadow-itemBox border-[1px] border-slate-100 justify-between gap-2'
      key={item.id}>
      {!params.id ? <DeleteItemButton item={item} /> : <span className='w-[1px] h-10'></span>}
      <p className='font-semibold truncate text-sm'>{item.name}</p>
      {!params.id && <AddItemToShListButton item={item} />}
      {item.quantity ? <p className='font-bold text-xs text-primary-accent pr-2'>{item.quantity} pcs</p> : null}
    </li>
  )
}
