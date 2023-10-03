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
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: number
          name: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: number
          name?: string
        }
        Relationships: []
      }
      items: {
        Row: {
          brand: string | null
          category_id: number | null
          created_at: string
          description: string | null
          id: number
          name: string
          price: number | null
        }
        Insert: {
          brand?: string | null
          category_id?: number | null
          created_at?: string
          description?: string | null
          id?: number
          name: string
          price?: number | null
        }
        Update: {
          brand?: string | null
          category_id?: number | null
          created_at?: string
          description?: string | null
          id?: number
          name?: string
          price?: number | null
        }
        Relationships: [
          {
            foreignKeyName: 'items_category_id_fkey'
            columns: ['category_id']
            referencedRelation: 'categories'
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
export interface ItemWithCategory extends Item {
  categories: Category | null
}

export interface CategoryWithItems {
  name: string
  items: ItemWithCategory[]
}
