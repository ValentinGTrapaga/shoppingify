import React from 'react'
import { ShoppingSVG } from './ShoppingSVG'

export const NoItemsCreatedSection = () => {
  return (
    <section className='sm:flex hidden w-full flex-1 p-12 flex-col items-center justify-center gap-12' >
      <p className='font-bold text-4xl text-center'>Looks like you have no items created yet, you can start doing so with the panel on your right </p>
      <ShoppingSVG className='w-96' />
    </section >
  )
}
