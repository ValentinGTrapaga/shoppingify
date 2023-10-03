import { type Database, type CategoryWithItems } from '@/database.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: itemsData } = await supabase
    .from('items')
    .select('*, categories(*)')
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

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 bg-gradient-to-t from-amber-100 to-yellow-50'>
      <section>
        {categoriesDraft?.map((category) => {
          return (
            <>
              <h3 className='text-xl underline'>{category.name}</h3>
              <ul key={category.name}>
                {category.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
            </>
          )
        })}
      </section>
    </main>
  )
}
