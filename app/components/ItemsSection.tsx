import React from 'react'
import { CategoryList } from './CategoryList'
import { type ItemWithCategory, type CategoryWithItems } from '@/database.types'
import { type StoreItem } from '../store'

export const ItemsSection = ({ categoriesArray, children }: { categoriesArray: Array<CategoryWithItems<ItemWithCategory | StoreItem>>, children?: React.ReactNode }) => {
  return (<section className='md:flex md:w-full flex-1 flex-col px-6 gap-6' >
    {children}
    <div className='flex flex-col gap-4'>
      {categoriesArray?.map((category) => {
        return (
          <CategoryList
            CategoryWithItems={category}
            key={category.name}
          />
        )
      })}
    </div>
  </section >)
}
