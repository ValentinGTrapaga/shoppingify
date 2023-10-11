import React, { useState } from 'react'
import { AddItemButton } from './AddItemButton'
import { useItemsStore } from '../store'
import { formatItemForNewList } from '../utils/formatItems'
import { NewListTitle } from './NewListTitle'
import { MinusSVG, PlusSVG, TrashCanSVG } from './icons'

export const NewList = () => {
  const { items, addOneItemQuantityQuantity, removeOneItemQuantity, removeItem } = useItemsStore()
  const [editable, setEditable] = useState(false)
  const categoriesWithItems = formatItemForNewList(items)
  console.log(categoriesWithItems)

  return (
    <div className='flex flex-col gap-4'>
      <AddItemButton />
      <NewListTitle />
      {categoriesWithItems.map(category => (
        <>
          <h3 className='font-medium text-sm text-[#828282]' key={category.name}>{category.name}</h3>
          <ul>
            {category.items.map(item => (
              <>
                <li key={item.id} className='flex font-bold items-center justify-between'><p className='truncate py-2'>{item.name}</p>
                  <span className={`flex gap-1 ${editable ? 'bg-white' : 'bg-transparent'} rounded-lg items-center`}>
                    {editable &&
                      <>
                        <button className='px-2 py-2 rounded-lg bg-primary-accent' onClick={() => { removeItem(item.id) }}>
                          <TrashCanSVG cln='h-5 w-5' />
                        </button>
                        <button className='px-2 py-2 rounded-lg' onClick={() => { removeOneItemQuantity(item.id) }}>
                          <MinusSVG cln='h-5 w-5' stroke='#f9a109' />
                        </button>
                      </>}
                    <button onClick={() => { setEditable(prev => !prev) }} className='text-xs border-2 rounded-full border-primary-accent px-2 py-1 text-primary-accent'>
                      {item.quantity} pcs
                    </button>
                    {editable &&
                      <button className='px-2 py-2 rounded-lg' onClick={() => { addOneItemQuantityQuantity(item.id) }}>
                        <PlusSVG cln='h-5 w-5' stroke='#f9a109' />
                      </button>
                    }
                  </span>
                </li>
              </>
            ))}
          </ul>
        </>
      ))}
    </div>
  )
}
