'use client'
import React from 'react'
import { useItemsStore } from '../store'
import { NewList } from './NewList'
import { AddItemForm } from './AddItemForm'
import { type Category } from '@/database.types'

export const AsideSection = ({ categories }: { categories: Category[] | null }) => {
  if (categories === null) {
    return (
      <aside className='w-[calc(100%-48px)] md:w-96 h-screen py-12 px-8 fixed right-0 top-0 border-l-2 border-amber-100 bg-secondary-background flex flex-col gap-4'>
        Looks like you have no categories to added, add one first in order to use the app
      </aside>)
  }

  const { asideSectionName } = useItemsStore()

  const asideSectionJSX = {
    none: null,
    listItems: <NewList />,
    addItem: <AddItemForm categories={categories} />
  }

  if (asideSectionName === 'none') return null
  return (
    <aside className='w-[calc(100%-48px)] md:w-96 h-screen py-12 px-8 fixed right-0 top-0 border-l-2 border-amber-100 bg-secondary-background flex flex-col gap-4'>
      {asideSectionJSX[asideSectionName]}
    </aside>)
}
