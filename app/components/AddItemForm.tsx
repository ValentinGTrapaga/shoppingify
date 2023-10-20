'use client'

import { InputCategories, InputItem, InputTextarea } from './InputItem'
import { CancelSubmitButton, FormSubmitButton } from './AddItemFormButtons'
import { createItem } from '../actions'
import { type Category } from '@/database.types'
import { useRef } from 'react'
import { Modal } from './Modal'

export const AddItemForm = ({ categories }: { categories: Category[] }) => {
  const formRef = useRef<HTMLFormElement>(null)

  const handleMutation = async (formData: FormData) => {
    try {
      await createItem(formData)
    } catch (error) {
      console.log(error)
    }
    if (formRef) {
      formRef?.current?.reset()
    }
  }

  return (
    <form
      ref={formRef}
      action={handleMutation}
      className='flex flex-col w-full h-full gap-4 justify-around'>
      <div className='flex flex-col h-full gap-4'>
        <h2 className='font-bold text-xl'>Add a new item</h2>
        <InputItem
          name='Name'
          type='text'
        />
        <InputTextarea name='Description' />
        <InputCategories categories={categories} />
      </div>
      <div className='flex items-center justify-center gap-8 w-full'>
        <CancelSubmitButton />
        <FormSubmitButton />
      </div>
    </form>
  )
}
