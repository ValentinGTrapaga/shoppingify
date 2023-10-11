import { useItemsStore } from '../store'

export const FormSubmitButton = () => (
  <button className='font-bold text-white bg-primary-accent px-4 py-2 rounded-md' type='submit'>Save</button>
)

export const CancelSubmitButton = () => {
  const { changeAsideSection } = useItemsStore()

  const handleClick = () => { changeAsideSection('listItems') }

  return (<button onClick={handleClick} className='font-bold '>Cancel</button>)
}
