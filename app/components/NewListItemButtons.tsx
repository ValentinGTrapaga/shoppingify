import { MinusSVG, PlusSVG, TrashCanSVG } from './icons'

import React from 'react'

interface ButtonProps {
  onClick: (itemId: number) => void
  itemId: number
}

export const RemoveItemButton = ({ onClick, itemId }: ButtonProps) => {
  return (
    <button className='px-2 py-2 rounded-lg bg-primary-accent' onClick={() => { onClick(itemId) }}>
      <TrashCanSVG cln='h-5 w-5' />
    </button >
  )
}

export const RemoveOneItemButton = ({ onClick, itemId }: ButtonProps) => {
  return (
    <button className='px-2 py-2 rounded-lg' onClick={() => { onClick(itemId) }}>
      <MinusSVG cln='h-5 w-5' stroke='#f9a109' />
    </button>
  )
}

export const AddOneItemButton = ({ onClick, itemId }: ButtonProps) => {
  return (
    <button className='px-2 py-2 rounded-lg' onClick={() => { onClick(itemId) }}>
      <PlusSVG cln='h-5 w-5' stroke='#f9a109' />
    </button>
  )
}
