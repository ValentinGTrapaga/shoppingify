import { type ItemWithCategory } from '@/database.types'
import { create } from 'zustand'

export interface StoreItem {
  id: number
  name: string
  brand: string | null
  category_name?: string
  quantity: number
}

interface ListItemsStore {
  asideSectionName: 'listItems' | 'addItem' | 'none'
  items: StoreItem[]
  listName: string
  changeAsideSection: (to: 'listItems' | 'addItem' | 'none') => void
  addItemToStore: (itemToAdd: ItemWithCategory) => void
  changeListName: (newName: string) => void
  addOneItemQuantityQuantity: (itemId: number) => void
  removeOneItemQuantity: (itemId: number) => void
  removeItem: (itemId: number) => void
}

export const useItemsStore = create<ListItemsStore>()((set) => ({
  asideSectionName: 'none',
  items: [],
  listName: 'New List',
  changeAsideSection: (to) => { set((state) => ({ ...state, asideSectionName: to })) },
  addItemToStore: (itemToAdd) => {
    set((state) => {
      const item = state.items.find(item => item.id === itemToAdd.id)
      const { id, name, brand, categories } = itemToAdd
      const itemToStore = { id, name, brand, category_name: categories?.name }
      if (!item) {
        state.items.push({ ...itemToStore, quantity: 1 })
      } else {
        item.quantity += 1
      }
      return { ...state }
    })
  },
  changeListName: newName => {
    set((state) => ({ ...state, listName: newName }))
  },
  addOneItemQuantityQuantity: itemId => {
    set((state) => {
      const item = state.items.find(item => item.id === itemId)
      if (item) {
        item.quantity += 1
      }
      return { ...state }
    })
  },
  removeOneItemQuantity: itemId => {
    set((state) => {
      const item = state.items.find(item => item.id === itemId)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
      return { ...state }
    })
  },
  removeItem: itemId => {
    set((state) => {
      const newItemsArray = state.items.filter(item => item.id !== itemId)
      return {...state, items: newItemsArray}
    })
  }
}))
