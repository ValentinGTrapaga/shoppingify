import React from 'react'
import { AddItemButton } from './AddItemButton'
import { useItemsStore } from '../store'
import { formatItemForNewList } from '../utils/formatItems'
import { NewListTitle } from './NewListTitle'
import { NewListCategory } from './NewListCategory'
import { ShoppingSVG } from './ShoppingSVG'

export const NewList = () => {
  const { items, createList } = useItemsStore()
  const categoriesWithItems = formatItemForNewList(items)

  const createListClick = async () => {
    const message = await createList()
    alert(message)
  }

  return (
    <>
      <AddItemButton />
      {
        categoriesWithItems.length > 0
          ? (
            <div className='h-full flex flex-col justify-between'>
              <div className='flex flex-col'>
                <NewListTitle />
                {categoriesWithItems.map(category => (
                  <ul key={category.name}>
                    <NewListCategory category={category} />
                  </ul>
                ))}
              </div>
              <button className='font-bold text-white bg-primary-accent px-4 py-2 rounded-md' onClick={createListClick}>
                Send List
              </button>
            </div>)
          : (
            <div className='w-full h-full flex flex-col items-center justify-between font-bold'>
              <p>No items</p>
              <ShoppingSVG className='w-48' />
            </div>)}
    </>
  )
}
