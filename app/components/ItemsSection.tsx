import React from 'react'
import { CategoryList, CreatedListCategory } from './CategoryList'
import { type ItemWithCategory, type CategoryWithItems } from '@/database.types'
import { type StoreItem } from '../store'

export const ItemsSection = ({ categoriesArray, children }: { categoriesArray: Array<CategoryWithItems<ItemWithCategory>>, children?: React.ReactNode }) => {
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

export const CreatedListCategoriesSection = ({ categoriesArray }: { categoriesArray: Array<CategoryWithItems<StoreItem>> }) => {
  return (
    <div className='flex flex-col gap-4'>
      {categoriesArray.map(category => (
        <CreatedListCategory CategoryWithItems={category} key={category.name} />
      ))}
    </div>
  )
}
