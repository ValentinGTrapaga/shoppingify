import { type Database } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function Lists() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user } } = await supabase.auth.getUser()
  console.log({ user })

  if (!user) {
    redirect('/login')
  }

  const { data: lists } = await supabase.from('shopping_lists_items').select('*').eq('user_id', user?.id)
  console.log({ lists })

  if (lists === null) {
    return (<p>Looks like there has been a problem loading your lists, please refresh the page</p>)
  }

  return (
    <>
      {
        lists.length === 0
          ? (<p className='h-full w-full flex items-center justify-center'>Looks like you have not got any shopping list created yet, you can create one selecting the items from the main page and adding them to a new list</p>)
          : (<p>Aca van las listas</p>)
      }
    </>
  )
}
