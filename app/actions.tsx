'use server'

import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { revalidatePath } from 'next/cache'

export async function createItem(formData: FormData) {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()
  const userId = session?.user.id

  const name = formData.get('name')
  const categories = Number(formData.get('categories'))
  const description = formData.get('description')

  console.log({ name, description, categories })
  const response = await supabase.from('items').insert({ name, description, category_id: categories, user_id: userId })
  console.log({ response })
  revalidatePath('/')
}
