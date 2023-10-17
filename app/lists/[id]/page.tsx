import { type Database } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { formatItemForNewList } from '@/app/utils/formatItems'
import { ItemsSection } from '@/app/components/ItemsSection'
import { type StoreItem } from '@/app/store'
import { BackArrowSVG } from '@/app/components/icons'
import Link from 'next/link'
import { formatListDate } from '@/app/utils/formatListDate'
import { DisplayDate } from '@/app/components/DisplayDate'

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

  const { list_name: listName, items_list: itemsList, created_at } = list[0]
  const newList = itemsList.map(item => {
    const { name, id, brand, quantity, category_name } = item as StoreItem
    return { id, name, brand, quantity, category_name }
  })
  const formattedList = formatItemForNewList(newList)

  const formattedDate = formatListDate(created_at)

  return (
    <section className='flex flex-col gap-6'>
      <Link href='/lists' className='text-primary-accent flex gap-1 text-xs items-center font-bold ml-6'><BackArrowSVG cls='w-4 h-4' stroke='#f9a109' /> back</Link>
      <ItemsSection categoriesArray={formattedList}>
        <div className='flex flex-col gap-1 font-bold'>
          <h2 className='text-2xl md:text-3xl'>{listName}</h2>
          <DisplayDate date={formattedDate} />
        </div>
      </ItemsSection>
    </section>
  )
}
