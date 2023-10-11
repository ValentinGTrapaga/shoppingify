import React from 'react'
import { TitleListPage } from './TitleListPage'
import { CategoryList } from './CategoryList'
import { type ItemWithCategory, type CategoryWithItems } from '@/database.types'

export const ItemsSection = ({ categoriesArray }: { categoriesArray: Array<CategoryWithItems<ItemWithCategory>> }) => {
  if (categoriesArray) {
    return (<section className='md:flex md:w-full flex-1 p-12 flex-col gap-6' >
      <TitleListPage />
      <div className='px-16 flex flex-col gap-4'>
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
  } else {
    return (<p>Loading items...</p>)
  }
}
