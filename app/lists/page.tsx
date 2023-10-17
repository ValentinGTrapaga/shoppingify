import { type Database } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NoListsMessage } from '../components/NoListsMessage'
import { formatListDate } from './../utils/formatListDate'
import { ShoppingListCreated } from '../components/ShoppingList'

export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: lists } = await supabase.from('shopping_lists').select('*').eq('user_id', user?.id)

  if (lists === null) {
    return (<p>Looks like there has been a problem loading your lists, please refresh the page</p>)
  }

  return (
    <>
      {
        lists.length === 0
          ? (<NoListsMessage />)
          : (
            <section className='px-6 flex flex-col gap-6'>
              <h2 className='text-2xl font-bold'>Shopping history</h2>
              <ul className='w-full  flex flex-col gap-4'>
                {lists.map(list => {
                  const formattedDate = formatListDate(list.created_at)
                  return (
                    <ShoppingListCreated list={list} date={formattedDate} key={list.id} />
                  )
                }
                )}
              </ul>
            </section>)
      }
    </>
  )
}
