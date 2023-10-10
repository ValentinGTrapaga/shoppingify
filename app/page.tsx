import { type Database, type CategoryWithItems } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AsideSection } from './components/AsideSection'
import { ItemsSection } from './components/ItemsSection'
import { NoItemsCreatedSection } from './components/NoItemsCreatedSection'
import { NewList } from './components/NewList'
import { AddItemForm } from './components/AddItemForm'

export default async function Home({ searchParams }: { searchParams: Record<string, string> }) {
  const { newList, addItem } = searchParams
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()
  const { data: itemsData } = await supabase
    .from('items')
    .select('*, categories(*)')
    .eq('user_id', session?.user.id)

  const { data: categories } = await supabase.from('categories').select('name')

  const categoriesArray = categories?.map(category => category.name)

  const categoriesDraft = itemsData?.reduce<CategoryWithItems[]>(
    (acc, item) => {
      const categoryName = acc.find(
        (accItem) => accItem.name === item?.categories?.name
      )
      if (!categoryName && item && item.categories?.name) {
        acc.push({
          name: item?.categories?.name,
          items: [item]
        })
      } else if (categoryName) {
        categoryName.items.push(item)
      }

      return acc
    },
    []
  )

  if (!session) {
    redirect('/login')
  }

  return (
    <div className='flex md:flex-row flex-col-reverse'>
      {categoriesDraft ? (<ItemsSection categoriesArray={categoriesDraft} />) : <NoItemsCreatedSection />}
      {newList && (
        <AsideSection className='bg-secondary-background '>
          <NewList />
        </AsideSection>)}
      {addItem && (
        <AsideSection className='bg-primary-background'>
          <AddItemForm categories={categoriesArray} />
        </AsideSection>)}
    </div >
  )
}
