import React, { type ReactElement } from 'react'

export const AsideSection = ({ children, className }: { children: ReactElement, className?: string }) => {
  return (
    <aside className={`w-full md:w-96 min-h-screen gap-4 py-12 px-8 items-center ${className} absolute right-0 top-0 shadow-md shadow-zinc-300`}>
      {children}
    </aside>
  )
}
