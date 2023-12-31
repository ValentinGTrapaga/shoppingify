import { type StoreItem } from './app/store'

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      categories: {
        Row: {
          created_at: string
          description: string | null
          id: number
          name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'categories_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['user_id']
          }
        ]
      }
      items: {
        Row: {
          brand: string | null
          category_id: number
          created_at: string
          description: string | null
          id: number
          name: string
          user_id: string | null
        }
        Insert: {
          brand?: string | null
          category_id: number
          created_at?: string
          description?: string | null
          id?: number
          name: string
          user_id?: string | null
        }
        Update: {
          brand?: string | null
          category_id?: number
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'items_category_id_fkey'
            columns: ['category_id']
            referencedRelation: 'categories'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'items_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['user_id']
          }
        ]
      }
      shopping_lists: {
        Row: {
          created_at: string
          id: string
          items_list: StoreItem[]
          list_name: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          items_list: Json[]
          list_name: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          items_list?: Json[]
          list_name?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'shopping_lists_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['user_id']
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          created_at: string
          name: string
          provider: string
          user_id: string
          user_name: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          name: string
          provider: string
          user_id: string
          user_name: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          name?: string
          provider?: string
          user_id?: string
          user_name?: string
        }
        Relationships: [
          {
            foreignKeyName: 'users_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Item = Database['public']['Tables']['items']['Row']
export type Category = Database['public']['Tables']['categories']['Row']
export type ShoppingList = Database['public']['Tables']['shopping_lists']['Row']
export interface ItemWithCategory extends Item {
  categories: Category | null
}

export interface CategoryWithItems<T> {
  name: string
  items: T[]
}
