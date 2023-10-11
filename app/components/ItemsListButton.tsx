'use client'

import React from 'react'
import { ListItemsSVG } from './icons'
import { useItemsStore } from '../store'

export const ItemsListButton = () => {
  const state = useItemsStore()

  const handleClick = () => {
    if (state.asideSectionName !== 'listItems') {
      state.changeAsideSection('listItems')
    } else {
      state.changeAsideSection('none')
    }
  }

  return (
    <button onClick={handleClick} className='rounded-full bg-primary-accent w-8 h-8 md:w-10 md:h-10 flex items-center justify-center'>
      <ListItemsSVG cln='w-6  h-6' />
    </button>
  )
}
