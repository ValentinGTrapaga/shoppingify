'use client'

import { useItemsStore } from '../store'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'

export const FormSubmitButton = () => {
  const { pending } = useFormStatus()

  return (
    <button className={`font-bold text-white ${pending ? 'animate-pulse' : ''} bg-primary-accent transition-all px-4 py-2 rounded-md`} disabled={pending} type='submit'>{pending ? 'Saving' : 'Save'}</button>
  )
}

export const CancelSubmitButton = () => {
  const { changeAsideSection } = useItemsStore()

  const handleClick = () => { changeAsideSection('listItems') }

  return (<button onClick={handleClick} className='font-bold '>Cancel</button>)
}
