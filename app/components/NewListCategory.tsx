import { type CategoryWithItems } from '@/database.types'
import React from 'react'
import { type StoreItem } from '../store'
import { NewListItem } from './NewListItem'

export const NewListCategory = ({ category }: { category: CategoryWithItems<StoreItem> }) => {
  return (
    < li>
      <h3 className='font-medium text-sm text-[#828282]'>{category.name}</h3>
      <ul>
        {category.items.map(item => (
          <NewListItem key={item.id} item={item} />
        ))}
      </ul>
    </li>
  )
}
