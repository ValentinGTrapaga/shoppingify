import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { type ChangeEvent, useState } from 'react'
import { useRouter } from 'next/navigation'

export const AddCategory = ({
  toggleAddCategory
}: {
  toggleAddCategory: () => void
}) => {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const [newCategory, setNewCategory] = useState('')

  const addCategoryToDB = async () => {
    const user = await supabase.auth.getUser()
    const userId = user.data.user?.id
    const data = await supabase
      .from('categories')
      .insert({ name: newCategory, user_id: userId })

    toggleAddCategory()
    router.refresh()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setNewCategory(value)
  }

  return (
    <>
      <label className="flex flex-col font-semibold">
        Enter new category
        <input
          className="border-2 mt-2 border-slate-300 rounded-lg py-2 px-2 bg-white placeholder:text-sm"
          name="new category"
          type="text"
          placeholder="Beverages..."
          required
          value={newCategory}
          onChange={(e) => {
            handleChange(e)
          }}
        />
      </label>
      <span className="flex gap-4 items-center mx-auto">
        <button type="button" onClick={toggleAddCategory} className="font-bold">
          Cancel
        </button>
        <button
          type="button"
          className="font-bold text-white bg-primary-accent transition-all px-4 py-2 rounded-md"
          onClick={addCategoryToDB}
        >
          Add
        </button>
      </span>
    </>
  )
}
