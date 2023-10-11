import React from 'react'
import { SearchSVG } from './icons'

export const TitleListPage = () => {
  return (
    <div className='flex md:flex-row flex-col gap-4 items-center w-full mb-4 justify-evenly'>
      <h2 className='text-2xl lg:text-4xl font-bold w-full md:w-1/2 text-center'>
        <span className='text-primary-accent'>Shoppingify</span> allows
        you take your shopping list wherever you go
      </h2>
      <form className='relative flex'>
        <input
          type='text'
          placeholder='avocado, banana...'
          className='px-4 py-4 rounded-md shadow-sm border-black border-2 bg-white'
        />
        <button
          type='submit'
          className='w-6 h-6 absolute bg-white top-1/2 -right-1 -translate-x-1/2 -translate-y-1/2'>
          <SearchSVG />
        </button>
      </form>
    </div>
  )
}
