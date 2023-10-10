import { InputCategories, InputItem, InputTextarea } from './InputItem'
import { CancelSubmitButton, FormSubmitButton } from './Buttons'
import { createItem } from '../actions'

export const AddItemForm = ({ categories }: { categories: string[] }) => {
  return (
    <form
      action={createItem}
      className='flex flex-col w-full h-full gap-4 justify-around'>
      <div className='flex flex-col h-full gap-4'>
        <h2 className='font-bold text-xl'>Add a new item</h2>
        <InputItem
          name='Name'
          type='text'
        />
        <InputTextarea name='Note (optional)' />
        <InputCategories categories={categories} />
      </div>
      <div className='flex items-center justify-center gap-8 w-full'>
        <CancelSubmitButton />
        <FormSubmitButton />
      </div>
    </form>
  )
}
