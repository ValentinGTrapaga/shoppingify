'use client'

import { TrashCanSVG, ShareSVG, HeartSVG } from './icons'
import { usePathname } from 'next/navigation'

export const ShareListButton = () => {
  const pathname = usePathname()

  const handleShareListCLick = async () => {
    console.log(`${process.env.NEXT_PUBLIC_WEBLINK}${pathname}`)
    await navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_WEBLINK}${pathname}`)
  }

  return (<button onClick={handleShareListCLick} className='flex gap-1 items-center text-white bg-gray-800 hover:bg-gray-900 font-bold rounded-lg text-xs px-4 py-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-70'><ShareSVG cls='w-4 h-4' stroke='#ffffff' />Share</button>)
}

export const SaveListButton = ({ listId }: { listId: string }) => {
  const handleClick = async () => {
    console.log({ listId })
  }

  return (<button onClick={handleClick} className='flex gap-1 items-center focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-bold rounded-lg text-xs px-4 py-2 '><HeartSVG cls='w-4 h-4' stroke='#ffffff' />Save</button>)
}

export const DeleteListButton = ({ listId }: { listId: string }) => {
  const handleClick = () => {
    console.log({ listId })
  }

  return (<button onClick={handleClick} className='flex gap-1 items-center focus:outline-none text-white bg-red-700 hover:bg-red-800 rounded-lg text-xs px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 font-bold'><TrashCanSVG cln='w-4 h-4' /> Delete</button>)
}
