import React, { useState } from 'react'
import { useItemsStore } from '../store'
import { EditListSVG } from './icons'

export const NewListTitle = () => {
  const { listName, changeListName } = useItemsStore()
  const [editableName, setEditableName] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { newListName: { value } } = (e.currentTarget)
    changeListName(value)
    setEditableName(prevState => !prevState)
  }

  const handleClickEditListName = () => {
    setEditableName(prevState => !prevState)
  }

  return (
    <span className='w-full flex justify-between items-center gap-2'>
      <h2 className={` py-1 w-full font-bold flex-1 ${editableName ? 'hidden' : 'inline'}`}>{listName}</h2>
      <form className={`flex-1 ${editableName ? 'inline' : 'hidden'}`} onSubmit={(e) => { handleSubmit(e) }}>
        <input type='text' name='newListName' className='px-2 py-1 w-full rounded-lg border-[1px] border-black' />
      </form>
      <button className='' onClick={handleClickEditListName}>
        <EditListSVG cls='w-6 h-6' />
      </button>
    </span >
  )
}
