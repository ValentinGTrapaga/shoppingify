import { type Database, type CategoryWithItems } from '@/database.types'
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
  const { data: itemsData } = await supabase
    .from('items')
    .select('*, categories(*)')
    .eq('user_id', session?.user.id)

  const { data: categories } = await supabase.from('categories').select('*')

  const categoriesDraft = itemsData && formatItemsByCategory(itemsData)

  if (!session) {
    redirect('/login')
  }

  return (
    <div className='flex md:flex-row flex-col-reverse'>
      {categoriesDraft ? (<ItemsSection categoriesArray={categoriesDraft} />) : <NoItemsCreatedSection />}
      <AsideSection categories={categories} />
    </div >
  )
}
