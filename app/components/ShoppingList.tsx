import Link from 'next/link'
import { ChevronRightSVG } from './icons'
import { type ShoppingList } from '@/database.types'
import { DisplayDate } from './DisplayDate'

export const ShoppingListCreated = ({ list, date }: { list: ShoppingList, date: string }) => (<Link className='border-[1px] border-zinc-50 drop-shadow-itemBox p-4 bg-white rounded-lg flex justify-between items-center font-bold' href={`lists/${list.id}`} key={list.id}><p>{list.list_name}</p><span className='flex gap-2'><DisplayDate date={date} /><ChevronRightSVG cls='w-6 h-6' stroke='#f9a109' /></span>
</Link>)
