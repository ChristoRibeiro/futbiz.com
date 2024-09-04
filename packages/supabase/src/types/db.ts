export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Company: {
        Row: {
          country: string
          createdAt: string
          id: string
          name: string
          updatedAt: string
        }
        Insert: {
          country: string
          createdAt?: string
          id: string
          name: string
          updatedAt: string
        }
        Update: {
          country?: string
          createdAt?: string
          id?: string
          name?: string
          updatedAt?: string
        }
        Relationships: []
      }
      Contact: {
        Row: {
          companyId: string | null
          createdAt: string
          email: string | null
          id: string
          name: string
          phone: string | null
          type: Database["public"]["Enums"]["ContactType"]
          updatedAt: string
        }
        Insert: {
          companyId?: string | null
          createdAt?: string
          email?: string | null
          id: string
          name: string
          phone?: string | null
          type: Database["public"]["Enums"]["ContactType"]
          updatedAt: string
        }
        Update: {
          companyId?: string | null
          createdAt?: string
          email?: string | null
          id?: string
          name?: string
          phone?: string | null
          type?: Database["public"]["Enums"]["ContactType"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Contact_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "Company"
            referencedColumns: ["id"]
          },
        ]
      }
      Deal: {
        Row: {
          companyId: string
          contactId: string
          createdAt: string
          currency: string
          description: string | null
          id: string
          status: Database["public"]["Enums"]["DealStatus"]
          title: string
          updatedAt: string
          value: number
        }
        Insert: {
          companyId: string
          contactId: string
          createdAt?: string
          currency: string
          description?: string | null
          id: string
          status: Database["public"]["Enums"]["DealStatus"]
          title: string
          updatedAt: string
          value: number
        }
        Update: {
          companyId?: string
          contactId?: string
          createdAt?: string
          currency?: string
          description?: string | null
          id?: string
          status?: Database["public"]["Enums"]["DealStatus"]
          title?: string
          updatedAt?: string
          value?: number
        }
        Relationships: [
          {
            foreignKeyName: "Deal_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "Company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Deal_contactId_fkey"
            columns: ["contactId"]
            isOneToOne: false
            referencedRelation: "Contact"
            referencedColumns: ["id"]
          },
        ]
      }
      Event: {
        Row: {
          companyId: string | null
          contactId: string | null
          createdAt: string
          description: string | null
          id: string
          type: Database["public"]["Enums"]["EventType"]
          updatedAt: string
        }
        Insert: {
          companyId?: string | null
          contactId?: string | null
          createdAt?: string
          description?: string | null
          id: string
          type: Database["public"]["Enums"]["EventType"]
          updatedAt: string
        }
        Update: {
          companyId?: string | null
          contactId?: string | null
          createdAt?: string
          description?: string | null
          id?: string
          type?: Database["public"]["Enums"]["EventType"]
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Event_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "Company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Event_contactId_fkey"
            columns: ["contactId"]
            isOneToOne: false
            referencedRelation: "Contact"
            referencedColumns: ["id"]
          },
        ]
      }
      Note: {
        Row: {
          companyId: string | null
          contactId: string
          content: string
          createdAt: string
          dealId: string | null
          id: string
          updatedAt: string
        }
        Insert: {
          companyId?: string | null
          contactId: string
          content: string
          createdAt?: string
          dealId?: string | null
          id: string
          updatedAt: string
        }
        Update: {
          companyId?: string | null
          contactId?: string
          content?: string
          createdAt?: string
          dealId?: string | null
          id?: string
          updatedAt?: string
        }
        Relationships: [
          {
            foreignKeyName: "Note_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "Company"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Note_contactId_fkey"
            columns: ["contactId"]
            isOneToOne: false
            referencedRelation: "Contact"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Note_dealId_fkey"
            columns: ["dealId"]
            isOneToOne: false
            referencedRelation: "Deal"
            referencedColumns: ["id"]
          },
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
      ContactType: "PLAYER" | "CLUB" | "OTHER"
      DealStatus: "LEAD" | "NEGOTIATION" | "CLOSED_WON" | "CLOSED_LOST"
      EventType: "PLAYER_TRANSFER" | "OTHER"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
