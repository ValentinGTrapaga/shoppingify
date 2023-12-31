import { type Database } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { formatItemForNewList } from '@/app/utils/formatItems'
import { BackArrowSVG } from '@/app/components/icons'
import Link from 'next/link'
import { formatListDate } from '@/app/utils/formatListDate'
import { DisplayDate } from '@/app/components/DisplayDate'
import {
  DeleteListButton,
  UseListButton,
  ShareListButton
} from '@/app/components/ListPageButtons'
import { CreatedListCategoriesSection } from '@/app/components/ItemsSection'

export default async function Page({ params }: { params: { id: string } }) {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { user }
  } = await supabase.auth.getUser()
  const { id } = params

  const currentUserId = user?.id

  if (!user) {
    redirect('/login')
  }

  const { data: list } = await supabase
    .from('shopping_lists')
    .select('*')
    .eq('id', id)
    .limit(1)

  if (list === null) {
    return (
      <p>
        Looks like there has been a problem loading your lists, please refresh
        the page
      </p>
    )
  }

  const {
    list_name: listName,
    items_list: itemsList,
    created_at,
    user_id: listUserId,
    id: listId
  } = list[0]
  const newList = itemsList.map((item) => {
    const { name, id, brand, quantity, category_name } = item
    return { id, name, brand, quantity, category_name }
  })
  const formattedList = formatItemForNewList(newList)

  const formattedDate = formatListDate(created_at)

  return (
    <section className="flex flex-col gap-6">
      <Link
        href="/lists"
        className="text-primary-accent flex gap-1 text-xs items-center font-bold ml-6"
      >
        <BackArrowSVG cls="w-4 h-4" stroke="#f9a109" /> back
      </Link>
      <section className="md:flex md:w-full flex-1 flex-col px-6 gap-6">
        <div className="flex justify-between">
          <div className="flex flex-col gap-1 font-bold">
            <h2 className="text-2xl md:text-3xl">{listName}</h2>
            <DisplayDate date={formattedDate} />
          </div>
          <div className="flex items-center gap-2">
            {currentUserId === listUserId && (
              <DeleteListButton listId={listId} />
            )}
            <ShareListButton />
            <UseListButton list={itemsList} />
          </div>
        </div>
        <CreatedListCategoriesSection categoriesArray={formattedList} />
      </section>
    </section>
  )
}
