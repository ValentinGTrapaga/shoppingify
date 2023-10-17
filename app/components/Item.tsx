'use client'
import { type ItemWithCategory } from '@/database.types'
import React from 'react'
import { AddItemToShListButton } from './AddItemToShListButton'
import { type StoreItem } from '../store'
import { useParams } from 'next/navigation'

export const Item = ({ item }: { item: ItemWithCategory | StoreItem }) => {
  const params = useParams()
  return (
    <li
      className='rounded-xl bg-white p-4 grid grid-cols-[1fr,auto] w-48 items-center shadow-slate-300 shadow-sm justify-between'
      key={item.id}>
      <p className='font-semibold truncate text-sm'>{item.name}</p>
      {!params.id && <AddItemToShListButton item={item} />}
      {item.quantity ? <p className='font-bold text-xs text-primary-accent'>{item.quantity} pcs</p> : null}
    </li>
  )
}
