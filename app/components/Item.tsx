'use client'
import { type ItemWithCategory } from '@/database.types'
import React from 'react'
import { AddItemToShListButton } from './AddItemToShListButton'
import { DeleteItemButton } from './DeleteItemButton'
import { type StoreItem } from '../store'

export const Item = ({ item }: { item: ItemWithCategory }) => {
  return (
    <li
      className='rounded-lg bg-white grid grid-cols-[auto,1fr,auto] w-48 items-center drop-shadow-itemBox border-[1px] border-slate-100 justify-between gap-2'
      key={item.id}>
      <DeleteItemButton item={item} />
      <p className='font-semibold truncate text-sm'>{item.name}</p>
      <AddItemToShListButton item={item} />
    </li>
  )
}

export const CreatedListItem = ({ item }: { item: StoreItem }) => {
  return (
    <li
      className='rounded-lg bg-white grid grid-cols-[1fr,auto] w-48 items-center drop-shadow-itemBox border-[1px] p-2 border-slate-100 justify-between gap-2'
      key={item.id}>
      <p className='font-semibold truncate text-sm'>{item.name}</p>
      {item.quantity ? <p className='font-bold text-xs text-primary-accent pr-2'>{item.quantity} pcs</p> : null}
    </li>
  )
}
