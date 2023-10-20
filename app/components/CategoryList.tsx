import { type ItemWithCategory, type CategoryWithItems } from '@/database.types'
import React from 'react'
import { CreatedListItem, Item } from './Item'
import { type StoreItem } from '../store'

export const CategoryList = ({
  CategoryWithItems
}: {
  CategoryWithItems: CategoryWithItems<ItemWithCategory>
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

export const CreatedListCategory = ({
  CategoryWithItems
}: {
  CategoryWithItems: CategoryWithItems<StoreItem>
}) => {
  const { items, name } = CategoryWithItems
  return (
    <>
      <h3 className='font-bold text-lg'>{name}</h3>
      <ul className='w-full flex flex-wrap gap-4'>
        {items.map((item) => (
          <CreatedListItem
            item={item}
            key={item.id}
          />
        ))}
      </ul>
    </>
  )
}
