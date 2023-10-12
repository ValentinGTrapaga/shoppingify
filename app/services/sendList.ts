import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { type StoreItem } from '../store'

const supabase = createClientComponentClient()

export const sendShoppingList = async (items: StoreItem[], name: string) => {
  const user = await supabase.auth.getUser()
  if (!user) return
  const listToAdd = {
    user_id: user.data?.user?.id,
    list_name: name,
    items_list: items
  }
  return await supabase.from('shopping_lists').insert(listToAdd)
}
