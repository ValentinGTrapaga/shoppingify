'use client'

import { type Category } from '@/database.types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import React, { useRef, useState } from 'react'

export const InputItem = ({ name, type }: { name: string; type: string }) => {
  return (
    <label className="flex flex-col font-semibold">
      <p className="mb-2">{name}</p>
      <input
        className="border-2 border-slate-300 rounded-lg py-2 px-2 bg-white placeholder:text-sm"
        type={type}
        name="name"
        placeholder={`Enter a ${name.toLowerCase()}`}
      />
    </label>
  )
}

export const InputCategories = ({
  categories,
  toggleAddCategory
}: {
  categories: Category[]
  toggleAddCategory: () => void
}) => {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const selectRef = useRef<HTMLSelectElement | null>(null)

  const deleteCategory = async () => {
    await supabase
      .from('categories')
      .delete()
      .eq('id', selectRef.current?.value)
    router.refresh()
  }

  return (
    <>
      <label className="flex flex-col font-semibold">
        <p className="mb-2">Categories</p>
        <select
          ref={selectRef}
          name="categories"
          className="border-2 border-slate-300 rounded-lg py-2 px-2  bg-white placeholder:text-sm"
          placeholder="Enter a category"
        >
          {categories.map((category) => (
            <option
              value={category.id}
              className="font-semibold"
              key={category.id}
            >
              {category.name}
            </option>
          ))}
        </select>
      </label>
      <span className="flex gap-4 w-full">
        <button
          type="button"
          className="font-bold text-white bg-red-700 transition-all px-4 py-2 rounded-md"
          onClick={deleteCategory}
        >
          Delete category
        </button>
        <button
          type="button"
          className="font-bold text-white bg-primary-accent transition-all px-4 py-2 rounded-md"
          onClick={toggleAddCategory}
        >
          Add category
        </button>
      </span>
    </>
  )
}

export const InputTextarea = ({ name }: { name: string }) => {
  return (
    <label className="flex flex-col font-semibold">
      <p className="mb-2">{name}</p>
      <textarea
        name="description"
        className="border-2 border-slate-300 rounded-lg py-2 px-2 bg-white placeholder:text-sm placeholder:align-middle resize-none"
        rows={6}
        placeholder="Enter a note"
      />
    </label>
  )
}
