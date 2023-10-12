import { type Database } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { StoreItem } from './../../store'

export default async function Lists({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  const { id } = params

  if (!user) {
    redirect('/login')
  }

  const { data: list } = await supabase.from('shopping_lists').select('*').eq('id', id).limit(1)

  if (list === null) {
    return (<p>Looks like there has been a problem loading your lists, please refresh the page</p>)
  }

  const { list_name: listName, items_list: itemsList } = list[0]

  return (
    <section className='flex flex-col gap-4'>
      <h2 className='text-3xl font-semibold'>List: {listName}</h2>
      <ul className='flex flex-col w-full gap-2'>
        {itemsList.map(item => {
          return (
            <li className='rounded-xl bg-white p-4 drop-shadow-itemBox border-2 border-slate-100 flex flex-wrap gap-2'><p className='truncate'>{item.name}</p> - <p>{item.quantity}</p></li>
          )
        })}
      </ul>
    </section>
  )
}
