import { useRouter } from 'next/navigation'
import { type StoreItem } from '../store'
import { SpinSVG, TrashCanSVG } from './icons'
import { type ItemWithCategory } from '@/database.types'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useState } from 'react'

export const DeleteItemButton = ({ item }: { item: ItemWithCategory | StoreItem }) => {
  const [pending, setPending] = useState(false)
  const { id } = item
  const router = useRouter()

  const supabase = createClientComponentClient()
  const handleDeleteClick = async () => {
    setPending(true)
    console.log('deleting item', item)
    const { error } = await supabase.from('items').delete().eq('id', id)
    if (!error) {
      router.refresh()
    }
  }

  return (
    <button
      disabled={pending}
      onClick={handleDeleteClick}
      className='bg-red-600 w-full h-full flex items-center justify-center p-2 rounded-l-lg hover:bg-red-400 '>
      {pending
        ? (<SpinSVG cls='w-4 h-4 animate-spin' stroke='#FFF' />)
        : (<TrashCanSVG cln="w-4 h-4" />)
      }
    </button>
  )
}
