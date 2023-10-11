import { type ItemWithCategory, type CategoryWithItems } from '@/database.types'
import { type StoreItem } from '../store'

export function formatItemsByCategory(itemsArr: ItemWithCategory[]) {
  const items = itemsArr?.reduce<Array<CategoryWithItems<ItemWithCategory>>>(
    (acc, item) => {
      const categoryName = acc.find((accItem) => accItem.name === item?.categories?.name)
      if (!categoryName && item && item.categories?.name) {
        acc.push({
          name: item?.categories?.name,
          items: [item]
        })
      } else if (categoryName) {
        categoryName.items.push(item)
      }
      return acc
    }, [])
  return [...items].sort((a, b) => a.name.localeCompare(b.name))
}

export function formatItemForNewList(itemsArr: StoreItem[]): Array<CategoryWithItems<StoreItem>> {
  const items = itemsArr?.reduce<Array<CategoryWithItems<StoreItem>>>((acc, item) => {
    const categoryExists = acc.find(category => category.name === item.category_name)
    if (!categoryExists && item && item.category_name) {
      acc.push({
        name: item.category_name,
        items: [item]
      })
    } else if (categoryExists) {
      categoryExists.items.push(item)
    }
    return acc
  }, [])
  return [...items].sort((a, b) => a.name.localeCompare(b.name))
}
