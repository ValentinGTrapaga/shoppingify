import { type Database } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AsideSection } from './components/AsideSection'
import { ItemsSection } from './components/ItemsSection'
import { NoItemsCreatedSection } from './components/NoItemsCreatedSection'
import { formatItemsByCategory } from './utils/formatItems'

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies })
  const {
    data: { session }
  } = await supabase.auth.getSession()

  if (!session) {
    redirect('/login')
  }

  const { data: itemsData } = await supabase
    .from('items')
    .select('*, categories(*)')
    .eq('user_id', session.user.id)

  const categoriesDraft = itemsData && formatItemsByCategory(itemsData)
  const { data: categories } = await supabase.from('categories').select('*')

  return (
    <>
      {categoriesDraft ? (<ItemsSection categoriesArray={categoriesDraft} />) : <NoItemsCreatedSection />}
      <AsideSection categories={categories} />
    </>
  )
}
