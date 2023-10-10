import Link from 'next/link'

export const FormSubmitButton = () => (
  <button className='font-bold text-white bg-primary-accent px-4 py-2 rounded-md' type='submit'>Save</button>
)

export const CancelSubmitButton = () => {
  return (<Link href='/?newList=true' className='font-bold '>Cancel</Link>)
}
