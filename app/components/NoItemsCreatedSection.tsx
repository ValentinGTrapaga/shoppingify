import React from 'react'
import { ListsSVG } from './ListsSVG'

export const NoItemsCreatedSection = () => {
  return (
    <section className='sm:flex min-h-screen w-full flex-col p-12 md:px-24 items-center justify-center gap-12' >
      <p className='font-bold text-2xl sm:text-4xl text-center'>Looks like you have no items created yet, you can start doing so with the panel on your right </p>
      <ListsSVG cls='w-96' />
    </section >
  )
}
