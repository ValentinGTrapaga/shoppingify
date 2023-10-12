import { type Database } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { NoListsMessage } from '../components/NoListsMessage'

export default async function Lists() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  const { data: lists } = await supabase.from('shopping_lists').select('*').eq('user_id', user?.id)
  console.log({ lists })

  if (lists === null) {
    return (<p>Looks like there has been a problem loading your lists, please refresh the page</p>)
  }

  return (
    <>
      {
        lists.length === 0
          ? (<NoListsMessage />)
          : (<p>
            {JSON.stringify(lists)}
          </p>)
      }
    </>
  )
}
