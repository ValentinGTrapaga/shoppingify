import { type CategoryWithItems } from '@/database.types'
import React from 'react'
import { Item } from './Item'

export const CategoryList = ({
  CategoryWithItems
}: {
  CategoryWithItems: CategoryWithItems
}) => {
  const { name, items } = CategoryWithItems
  return (
    <>
      <h3 className='font-bold text-lg'>{name}</h3>
      <ul className='w-full flex flex-wrap gap-4'>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </>
  )
}
