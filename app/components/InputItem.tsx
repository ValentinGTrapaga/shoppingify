import { type Category } from '@/database.types'
import React from 'react'

export const InputItem = ({ name, type }: { name: string, type: string }) => {
  return (
    <label className='flex flex-col font-semibold'>
      <p className='mb-2'>{name}</p>
      <input className='border-2 border-slate-300 rounded-lg py-2 px-2 bg-white placeholder:text-sm' type={type} name='name' placeholder={`Enter a ${name.toLowerCase()}`} />
    </label>
  )
}

export const InputCategories = ({ categories }: { categories: Category[] }) => {
  return (
    <label className='flex flex-col font-semibold'>
      <p className='mb-2'>Categories</p>
      <select name='categories' className='border-2 border-slate-300 rounded-lg py-2 px-2  bg-white placeholder:text-sm' placeholder='Enter a category'>
        {categories.map(category => (
          <option value={category.id} className='font-semibold' key={category.id}>{category.name}</option>
        ))}
      </select>
    </label>
  )
}

export const InputTextarea = ({ name }: { name: string }) => {
  return (
    <label className='flex flex-col font-semibold'>
      <p className='mb-2'>{name}</p>
      <textarea name='description' className='border-2 border-slate-300 rounded-lg py-2 px-2 bg-white placeholder:text-sm placeholder:align-middle resize-none' rows={6} placeholder='Enter a note' />
    </label>
  )
}
