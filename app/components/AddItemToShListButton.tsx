'use client'

import React from 'react'
import { PlusSVG } from './icons'
import { useItemsStore } from '../store'
import { type ItemWithCategory } from '@/database.types'

export const AddItemToShListButton = ({ item }: { item: ItemWithCategory }) => {
  const state = useItemsStore()

  const addItemClick = () => {
    state.addItemToStore(item)
  }

  return (
    <button onClick={addItemClick} className='w-6 h-6'>
      <PlusSVG cln='opacity-50' />
    </button>
  )
}
