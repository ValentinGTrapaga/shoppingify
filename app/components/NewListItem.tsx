import React, { useState } from 'react'
import { type StoreItem, useItemsStore } from '../store'
import { RemoveOneItemButton, RemoveItemButton, AddOneItemButton } from './NewListItemButtons'

export const NewListItem = ({ item }: { item: StoreItem }) => {
  const [editable, setEditable] = useState(false)
  const { removeItem, removeOneItemQuantity, addOneItemQuantityQuantity } = useItemsStore()

  return (
    <li key={item.id} className='flex font-bold items-center justify-between gap-2 '><p className='truncate w-[70%] py-2'>{item.name}</p>
      <span className={`flex gap-1 ${editable ? 'bg-white' : 'bg-transparent'} rounded-lg items-center drop-shadow-itemBox`}>
        {editable &&
          <>
            <RemoveItemButton onClick={removeItem} itemId={item.id} />
            <RemoveOneItemButton onClick={removeOneItemQuantity} itemId={item.id} />
          </>}
        <button onClick={() => { setEditable(prev => !prev) }} className='text-xs border-2 rounded-full border-primary-accent px-2 py-1 text-primary-accent'>
          {item.quantity} {!editable && 'pcs'}
        </button>
        {editable &&
          <AddOneItemButton onClick={addOneItemQuantityQuantity} itemId={item.id} />
        }
      </span>
    </li>
  )
}
