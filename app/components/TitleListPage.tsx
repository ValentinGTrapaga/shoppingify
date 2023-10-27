import React from 'react'
import { SearchSVG } from './icons'

export const TitleListPage = () => {
  return (
    <div className="flex md:flex-row flex-col gap-4 items-center w-full mb-4 justify-evenly">
      <h2 className="text-2xl lg:text-4xl font-bold w-full md:w-1/2 text-center">
        <span className="text-primary-accent">Shoppingify</span> allows you take
        your shopping list wherever you go
      </h2>
    </div>
  )
}
